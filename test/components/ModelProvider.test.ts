import { defineComponent, h } from 'vue';
import { mount, shallowMount } from '@vue/test-utils';
import { waitFor } from '@testing-library/dom';
import { ModelManager, PathUtils } from '@adobe/aem-spa-page-model-manager';
import { withModel } from '@/ComponentMapping';
import ModelProvider from '@/components/ModelProvider.vue';

describe('ModelProvider', () => {
  const INNER_COMPONENT_ID = 'innerContent';
  const TEST_PAGE_PATH = '/page/jcr:content/root';
  const TEST_COMPONENT_MODEL = { ':type': 'test/components/componentchild' };
  const ROOT_CLASS_NAME = 'root-class';

  const ChildComponent = defineComponent({
    name: 'ChildComponent',
    inheritAttrs: false,
    props: {
      id: {
        type: String,
        default: null,
      },
    },
    template: `
      <div :id='id' />`,
  });

  const getChildComponent = () =>
    h(ChildComponent, {
      id: INNER_COMPONENT_ID,
    });

  let addListenerSpy: jest.SpyInstance;
  let getDataSpy: jest.SpyInstance;
  let rootNode: HTMLDivElement | undefined;

  beforeEach(() => {
    addListenerSpy = jest
      .spyOn(ModelManager, 'addListener')
      .mockImplementation();
    getDataSpy = jest
      .spyOn(ModelManager, 'getData')
      .mockResolvedValue(TEST_COMPONENT_MODEL);
    rootNode = document.createElement('div');
    rootNode.className = ROOT_CLASS_NAME;
    document.body.appendChild(rootNode);
  });

  afterEach(() => {
    if (rootNode) {
      document.body.appendChild(rootNode);
      rootNode = undefined;
    }
  });

  describe('Tag instantiation ->', () => {
    beforeEach(() => {
      addListenerSpy.mockReset();
    });

    it('should initialize properly without parameter', () => {
      mount(ModelProvider, {
        slots: {
          default: [getChildComponent()],
        },
        attachTo: rootNode,
      });
      expect(addListenerSpy).toHaveBeenCalledWith('', expect.any(Function));

      const childNode = rootNode!.querySelector(`#${INNER_COMPONENT_ID}`);

      expect(childNode).toBeDefined();
    });

    it('should initialize properly with a path parameter', () => {
      mount(ModelProvider, {
        propsData: {
          cqPath: TEST_PAGE_PATH,
        },
        slots: {
          default: [getChildComponent()],
        },
        attachTo: rootNode,
      });

      expect(addListenerSpy).toHaveBeenCalledWith(
        TEST_PAGE_PATH,
        expect.any(Function),
      );

      const childNode = rootNode!.querySelector(`#${INNER_COMPONENT_ID}`);

      expect(childNode).toBeDefined();
    });

    it('should render a subpage properly when page path is provided', () => {
      mount(ModelProvider, {
        propsData: {
          injectPropsOnInit: true,
          pagePath: TEST_PAGE_PATH,
        },
        slots: {
          default: [getChildComponent()],
        },
        attachTo: rootNode,
      });

      expect(getDataSpy).toHaveBeenCalledWith({
        path: TEST_PAGE_PATH,
        forceReload: false,
      });

      const childNode = rootNode!.querySelector(`#${INNER_COMPONENT_ID}`);

      expect(childNode).toBeDefined();
    });

    it('should render components properly when component cqPath is provided', () => {
      mount(ModelProvider, {
        propsData: {
          injectPropsOnInit: true,
          cqPath: TEST_PAGE_PATH,
        },
        slots: {
          default: [getChildComponent()],
        },
        attachTo: rootNode,
      });

      expect(getDataSpy).toHaveBeenCalledWith({
        path: TEST_PAGE_PATH,
        forceReload: false,
      });

      const childNode = rootNode!.querySelector(`#${INNER_COMPONENT_ID}`);

      expect(childNode).toBeDefined();
    });

    it('should render components properly when containing page path and path to item is provided', () => {
      addListenerSpy = jest
        .spyOn(ModelManager, 'addListener')
        // @ts-ignore
        .mockImplementationOnce((path, callback) => {
          callback();
        });

      const PAGE_PATH = '/page/subpage';
      const ITEM_PATH = 'root/paragraph';

      mount(ModelProvider, {
        propsData: {
          injectPropsOnInit: true,
          pagePath: PAGE_PATH,
          itemPath: ITEM_PATH,
        },
        slots: {
          default: [getChildComponent()],
        },
        attachTo: rootNode,
      });

      expect(addListenerSpy).toHaveBeenCalled();
      expect(getDataSpy).toHaveBeenCalledWith({
        path: `${PAGE_PATH}/jcr:content/${ITEM_PATH}`,
        forceReload: false,
      });

      const childNode = rootNode!.querySelector(`#${INNER_COMPONENT_ID}`);

      expect(childNode).toBeDefined();
    });

    it('should log error when there is no data', async () => {
      // given
      const error = new Error('404 - Not found');

      getDataSpy.mockRejectedValue(error);

      console.error = jest.fn();

      mount(ModelProvider, {
        propsData: {
          injectPropsOnInit: true,
          cqPath: TEST_PAGE_PATH,
        },
        slots: {
          default: [getChildComponent()],
        },
      });

      // then
      await waitFor(() => expect(console.error).toHaveBeenCalledWith(error));
    });

    it('should fire event to reload editables when in editor', async () => {
      const dispatchEventSpy: jest.SpyInstance = jest
        .spyOn(PathUtils, 'dispatchGlobalCustomEvent')
        .mockImplementation();

      shallowMount(ModelProvider, {
        propsData: {
          injectPropsOnInit: true,
          pagePath: TEST_PAGE_PATH,
        },
        slots: {
          default: [getChildComponent()],
        },
        global: {
          provide: {
            isInEditor: true,
          },
        },
        attachTo: rootNode,
      });

      expect(getDataSpy).toHaveBeenCalledWith({
        path: TEST_PAGE_PATH,
        forceReload: false,
      });
      const childNode = rootNode!.querySelector(`#${INNER_COMPONENT_ID}`);

      expect(childNode).toBeDefined();

      await waitFor(() =>
        expect(dispatchEventSpy).toHaveBeenCalledWith(
          'cq-async-content-loaded',
          {},
        ),
      );

      dispatchEventSpy.mockReset();
    });
  });

  describe('Get data ->', () => {
    beforeEach(() => {
      getDataSpy.mockReset();
      addListenerSpy.mockReset();
    });

    it('should subscribe on the data with undefined parameters', () => {
      getDataSpy.mockResolvedValue({});

      mount(ModelProvider, {
        slots: {
          default: [getChildComponent()],
        },
      });

      expect(addListenerSpy).toHaveBeenCalledWith('', expect.any(Function));
    });

    it('should subscribe on the data with the provided attributes', () => {
      getDataSpy.mockResolvedValue({});

      mount(ModelProvider, {
        propsData: {
          cqPath: TEST_PAGE_PATH,
          cqForceReload: true,
        },
        slots: {
          default: [getChildComponent()],
        },
      });

      expect(addListenerSpy).toHaveBeenCalledWith(
        TEST_PAGE_PATH,
        expect.any(Function),
      );
    });
  });

  describe('withModel ->', () => {
    beforeEach(() => {
      addListenerSpy.mockReset();
    });

    it('should initialize properly without parameter', () => {
      const CompositeModelProvider = withModel(getChildComponent());

      mount(CompositeModelProvider, {
        attachTo: rootNode,
      });

      expect(addListenerSpy).toHaveBeenCalledWith('', expect.any(Function));

      const childNode = rootNode!.querySelector(`#${INNER_COMPONENT_ID}`);

      expect(childNode).toBeDefined();
    });

    it('should initialize properly with a path parameter', () => {
      const CompositeModelProvider = withModel(getChildComponent());

      mount(CompositeModelProvider, {
        propsData: {
          cqPath: TEST_PAGE_PATH,
        },
        attachTo: rootNode,
      });

      expect(addListenerSpy).toHaveBeenCalledWith(
        TEST_PAGE_PATH,
        expect.any(Function),
      );

      const childNode = rootNode!.querySelector(`#${INNER_COMPONENT_ID}`);

      expect(childNode).toBeDefined();
    });

    it('should render a subpage properly when page path is provided', () => {
      const CompositeModelProvider = withModel(getChildComponent(), {
        injectPropsOnInit: true,
      });

      // @ts-ignore
      mount(CompositeModelProvider, {
        propsData: {
          cqPath: TEST_PAGE_PATH,
        },
        attachTo: rootNode,
      });

      expect(getDataSpy).toHaveBeenCalledWith({
        path: TEST_PAGE_PATH,
        forceReload: false,
      });

      const childNode = rootNode!.querySelector(`#${INNER_COMPONENT_ID}`);

      expect(childNode).toBeDefined();
    });

    it('should render components properly when component cqPath is provided', () => {
      const CompositeModelProvider = withModel(getChildComponent(), {
        injectPropsOnInit: true,
      });

      mount(CompositeModelProvider, {
        propsData: {
          cqPath: TEST_PAGE_PATH,
        },
        attachTo: rootNode,
      });

      expect(getDataSpy).toHaveBeenCalledWith({
        path: TEST_PAGE_PATH,
        forceReload: false,
      });

      const childNode = rootNode!.querySelector(`#${INNER_COMPONENT_ID}`);

      expect(childNode).toBeDefined();
    });

    it('should render components properly when containing page path and path to item is provided', () => {
      addListenerSpy = jest
        .spyOn(ModelManager, 'addListener')
        // @ts-ignore
        .mockImplementationOnce((path, callback) => {
          callback();
        });

      const PAGE_PATH = '/page/subpage';
      const ITEM_PATH = 'root/paragraph';

      const CompositeModelProvider = withModel(getChildComponent(), {
        injectPropsOnInit: true,
      });

      mount(CompositeModelProvider, {
        propsData: {
          pagePath: PAGE_PATH,
          itemPath: ITEM_PATH,
        },
        attachTo: rootNode,
      });

      expect(addListenerSpy).toHaveBeenCalled();
      expect(getDataSpy).toHaveBeenCalledWith({
        path: `${PAGE_PATH}/jcr:content/${ITEM_PATH}`,
        forceReload: false,
      });

      const childNode = rootNode!.querySelector(`#${INNER_COMPONENT_ID}`);

      expect(childNode).toBeDefined();
    });

    it('should log error when there is no data', async () => {
      // given
      const error = new Error('404 - Not found');

      getDataSpy.mockRejectedValue(error);

      console.error = jest.fn();

      const CompositeModelProvider = withModel(getChildComponent(), {
        injectPropsOnInit: true,
      });

      mount(CompositeModelProvider, {
        propsData: {
          cqPath: TEST_PAGE_PATH,
        },
      });

      // then
      await waitFor(() => expect(console.error).toHaveBeenCalledWith(error));
    });

    it('should fire event to reload editables when in editor', async () => {
      const dispatchEventSpy: jest.SpyInstance = jest
        .spyOn(PathUtils, 'dispatchGlobalCustomEvent')
        .mockImplementation();

      const CompositeModelProvider = withModel(getChildComponent(), {
        injectPropsOnInit: true,
      });

      mount(CompositeModelProvider, {
        propsData: {
          pagePath: TEST_PAGE_PATH,
        },
        global: {
          provide: {
            isInEditor: true,
          },
        },
        attachTo: rootNode,
      });

      expect(getDataSpy).toHaveBeenCalledWith({
        path: TEST_PAGE_PATH,
        forceReload: false,
      });

      const childNode = rootNode!.querySelector(`#${INNER_COMPONENT_ID}`);

      expect(childNode).toBeDefined();

      await waitFor(() =>
        expect(dispatchEventSpy).toHaveBeenCalledWith(
          'cq-async-content-loaded',
          {},
        ),
      );

      dispatchEventSpy.mockReset();
    });
  });

  describe('Unmount -> ', () => {
    it('should remove listeners on unmount', () => {
      const removeListenerSpy: jest.SpyInstance = jest
        .spyOn(ModelManager, 'removeListener')
        .mockImplementation();

      mount(ModelProvider, {
        propsData: {
          cqPath: TEST_PAGE_PATH,
        },
        slots: {
          default: [getChildComponent()],
        },
      }).unmount();

      expect(removeListenerSpy).toHaveBeenCalledWith(
        TEST_PAGE_PATH,
        expect.any(Function),
      );
    });
  });
});
