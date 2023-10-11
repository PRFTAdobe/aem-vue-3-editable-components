import { defineComponent, h } from 'vue';
import { mount } from '@vue/test-utils';
import { Model } from '@adobe/aem-spa-page-model-manager';
import { ComponentMapping, withEditable } from '@/ComponentMapping';
import Container from '@/components/Container.vue';

describe('Container ->', () => {
  type CommuniqueProperties = {
    aemNoDecoration?: boolean;
    cqItems?: {
      [key: string]: Model;
    };
    cqItemsOrder?: string[];
    cqPath?: string;
  };

  const ITEM_CLASS_NAME = 'item-class';
  const COMPONENT_TYPE1 = 'components/c1';
  const COMPONENT_TYPE2 = 'components/c2';
  const ITEMS = {
    component1: {
      ':type': COMPONENT_TYPE1,
      id: 'c1',
    },
    component2: {
      ':type': COMPONENT_TYPE2,
      id: 'c2',
    },
  };
  const ITEMS_ORDER = ['component1', 'component2'];
  const CONTAINER_PATH = '/container';
  const CONTAINER_PLACEHOLDER_SELECTOR = '.new.section';
  const CONTAINER_PLACEHOLDER_DATA_ATTRIBUTE_SELECTOR =
    '[data-cq-data-path="/container/*"]';
  const ITEM1_DATA_ATTRIBUTE_SELECTOR =
    '[data-cq-data-path="/container/component1"]';
  const ITEM2_DATA_ATTRIBUTE_SELECTOR =
    '[data-cq-data-path="/container/component2"]';
  const ROOT_CLASS_NAME = 'root-class';

  const ChildComponent = defineComponent({
    name: 'ChildComponent',
    inheritAttrs: false,
    props: {
      className: {
        type: String,
        required: true,
      },
      id: {
        type: String,
        default: null,
      },
    },
    template: `
      <div :id='id' :class='className' />`,
  });

  const childComponent = h(ChildComponent, { className: ITEM_CLASS_NAME });

  let rootNode: HTMLDivElement | undefined;

  const vueWrapperOptions = (
    properties: CommuniqueProperties = {},
    isInEditor: boolean = true,
    componentMapping = new ComponentMapping(),
  ) => ({
    propsData: {
      ...properties,
    },
    global: {
      provide: {
        isInEditor,
        componentMapping,
      },
    },
    attachTo: rootNode,
  });

  let ComponentMappingSpy: jest.SpyInstance;

  beforeEach(() => {
    ComponentMappingSpy = jest.spyOn(ComponentMapping, 'get');
    rootNode = document.createElement('div');
    rootNode.className = ROOT_CLASS_NAME;
    document.body.appendChild(rootNode);
  });

  afterEach(() => {
    ComponentMappingSpy.mockRestore();
    if (rootNode) {
      document.body.appendChild(rootNode);
      rootNode = undefined;
    }
  });

  describe('childComponents ->', () => {
    it('should add the expected components', () => {
      ComponentMappingSpy.mockReturnValue(childComponent);

      mount(
        Container,
        vueWrapperOptions(
          {
            cqItems: ITEMS,
            cqItemsOrder: ITEMS_ORDER,
            cqPath: '',
          },
          false,
        ),
      );

      expect(ComponentMappingSpy).toHaveBeenCalledWith(COMPONENT_TYPE1);
      expect(ComponentMappingSpy).toHaveBeenCalledWith(COMPONENT_TYPE2);

      const childItem1 = rootNode!.querySelector('#c1');
      const childItem2 = rootNode!.querySelector('#c2');

      expect(childItem1).toBeDefined();
      expect(childItem2).toBeDefined();
    });

    it('should add a placeholder with data attribute when in WCM edit mode', () => {
      mount(
        Container,
        vueWrapperOptions(
          {
            cqPath: CONTAINER_PATH,
          },
          true,
        ),
      );

      const containerPlaceholder = rootNode!.querySelector(
        CONTAINER_PLACEHOLDER_DATA_ATTRIBUTE_SELECTOR +
          CONTAINER_PLACEHOLDER_SELECTOR,
      );

      expect(containerPlaceholder).toBeDefined();
    });

    it('should not add a placeholder when not in WCM edit mode', () => {
      mount(Container, vueWrapperOptions({}, false));

      const containerPlaceholder = rootNode!.querySelector(
        CONTAINER_PLACEHOLDER_SELECTOR,
      );

      expect(containerPlaceholder).toBeNull();
    });

    it('should add a data attribute on the children when in WCM edit mode', () => {
      const properties = {
        cqItems: ITEMS,
        cqItemsOrder: ITEMS_ORDER,
        cqPath: CONTAINER_PATH,
      };

      ComponentMappingSpy.mockReturnValue(withEditable(childComponent));

      mount(Container, vueWrapperOptions(properties, true));

      expect(ComponentMappingSpy).toHaveBeenCalledWith(COMPONENT_TYPE1);
      expect(ComponentMappingSpy).toHaveBeenCalledWith(COMPONENT_TYPE2);

      const containerPlaceholder = rootNode!.querySelector(
        CONTAINER_PLACEHOLDER_SELECTOR,
      );

      expect(containerPlaceholder).toBeDefined();

      const childItem1 = rootNode!.querySelector(ITEM1_DATA_ATTRIBUTE_SELECTOR);
      const childItem2 = rootNode!.querySelector(ITEM2_DATA_ATTRIBUTE_SELECTOR);

      expect(childItem1).toBeDefined();
      expect(childItem2).toBeDefined();
    });
  });

  describe('Data attributes ->', () => {
    it('should not add a the cq-data-path attribute if not in WCM edit mode', () => {
      mount(
        Container,
        vueWrapperOptions(
          {
            cqPath: CONTAINER_PATH,
          },
          false,
        ),
      );
      const container = rootNode!.querySelector(
        '[data-cq-data-path="/container"]',
      );

      expect(container).toBeNull();
    });

    it('should add a the cq-data-path attribute if in WCM edit mode', () => {
      mount(
        Container,
        vueWrapperOptions(
          {
            cqPath: CONTAINER_PATH,
          },
          true,
        ),
      );

      const container = rootNode!.querySelector(
        '[data-cq-data-path="/container"]',
      );

      expect(container).toBeDefined();
    });
  });
});
