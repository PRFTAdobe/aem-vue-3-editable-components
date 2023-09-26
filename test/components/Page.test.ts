import { Component, defineComponent, h, provide } from 'vue';
import { mount } from '@vue/test-utils';
import { ComponentMapping, withEditable } from '@/ComponentMapping';
import Page from '@/components/Page.vue';

describe('Page ->', () => {
  const ROOT_CLASS_NAME = 'root-class';
  const CHILD_COMPONENT_CLASS_NAME = 'child-class';
  const PAGE_PATH = '/page';
  const ITEM1_DATA_ATTRIBUTE_SELECTOR =
    '[data-cq-data-path="/page/jcr:content/component1"]';
  const ITEM2_DATA_ATTRIBUTE_SELECTOR =
    '[data-cq-data-path="/page/jcr:content/component2"]';
  const CHILD_PAGE_1_DATA_ATTRIBUTE_SELECTOR =
    '[data-cq-data-path="child/page1"]';
  const CHILD_PAGE_2_DATA_ATTRIBUTE_SELECTOR =
    '[data-cq-data-path="child/page2"]';
  const COMPONENT_TYPE1 = 'components/c1';
  const COMPONENT_TYPE2 = 'components/c2';
  const PAGE_TYPE1 = 'components/p1';
  const PAGE_TYPE2 = 'components/p2';

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

  const CHILDREN = {
    page1: {
      cqChildren: {},
      cqItems: {},
      cqItemsOrder: [],
      cqPath: '',
      ':type': PAGE_TYPE1,
      id: 'p1',
      ':path': 'child/page1',
    },
    page2: {
      cqChildren: {},
      cqItems: {},
      cqItemsOrder: [],
      cqPath: '',
      ':type': PAGE_TYPE2,
      id: 'p2',
      ':path': 'child/page2',
    },
  };

  let rootNode: HTMLDivElement | undefined;
  let ComponentMappingSpy: jest.SpyInstance;
  let EditorContextPage: Component;

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

  const getChildComponent = () =>
    h(ChildComponent, {
      className: CHILD_COMPONENT_CLASS_NAME,
    });

  beforeEach(() => {
    ComponentMappingSpy = jest.spyOn(ComponentMapping, 'get');
    EditorContextPage = defineComponent({
      name: 'EditorContextPage',
      components: { Page },
      inheritAttrs: false,
      setup() {
        provide('isInEditor', true);
        provide('componentMapping', new ComponentMapping());
      },
      template: `
        <Page v-bind='{...$attrs}' />`,
    });
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

  describe('child pages ->', () => {
    it('should add the expected children', () => {
      ComponentMappingSpy.mockReturnValue(getChildComponent());

      mount(Page, {
        propsData: {
          cqPath: PAGE_PATH,
          cqChildren: CHILDREN,
          cqItems: ITEMS,
          cqItemsOrder: ITEMS_ORDER,
        },
        global: {
          provide: {
            isInEditor: false,
            componentMapping: new ComponentMapping(),
          },
        },
        attachTo: rootNode,
      });

      expect(ComponentMappingSpy).toHaveBeenCalledWith(COMPONENT_TYPE1);
      expect(ComponentMappingSpy).toHaveBeenCalledWith(COMPONENT_TYPE2);

      const childItem1 = rootNode!.querySelector('#c1');
      const childItem2 = rootNode!.querySelector('#c2');

      expect(childItem1).toBeDefined();
      expect(childItem2).toBeDefined();

      const childPage1 = rootNode!.querySelector('#p1');
      const childPage2 = rootNode!.querySelector('#p2');

      expect(childPage1).toBeDefined();
      expect(childPage2).toBeDefined();
    });

    it('should add the expected children with data attributes when in WCM edit mode', () => {
      const EditableChildComponent = withEditable(getChildComponent());

      ComponentMappingSpy.mockImplementation((key: string) => {
        switch (key) {
          case COMPONENT_TYPE1:
          case COMPONENT_TYPE2:
            return EditableChildComponent;

          case PAGE_TYPE1:
          case PAGE_TYPE2:
            return EditorContextPage;

          default:
            return null;
        }
      });

      mount(Page, {
        propsData: {
          cqPath: PAGE_PATH,
          cqChildren: CHILDREN,
          cqItems: ITEMS,
          cqItemsOrder: ITEMS_ORDER,
        },
        global: {
          provide: {
            isInEditor: true,
            componentMapping: new ComponentMapping(),
          },
        },
        attachTo: rootNode,
      });

      expect(ComponentMappingSpy).toHaveBeenCalledWith(COMPONENT_TYPE1);
      expect(ComponentMappingSpy).toHaveBeenCalledWith(COMPONENT_TYPE2);

      const childItem1 = rootNode!.querySelector(ITEM1_DATA_ATTRIBUTE_SELECTOR);
      const childItem2 = rootNode!.querySelector(ITEM2_DATA_ATTRIBUTE_SELECTOR);

      expect(childItem1).toBeDefined();
      expect(childItem2).toBeDefined();

      const childPage1 = rootNode!.querySelector(
        CHILD_PAGE_1_DATA_ATTRIBUTE_SELECTOR,
      );
      const childPage2 = rootNode!.querySelector(
        CHILD_PAGE_2_DATA_ATTRIBUTE_SELECTOR,
      );

      expect(childPage1).toBeDefined();
      expect(childPage2).toBeDefined();
    });
  });
});
