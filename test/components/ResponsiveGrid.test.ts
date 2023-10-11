import { mount } from '@vue/test-utils';
import { defineComponent, h, inject } from 'vue';
import { ComponentMapping, withEditable } from '@/ComponentMapping';
import ResponsiveGrid from '@/components/ResponsiveGrid.vue';
import {
  componentClassNames,
  componentProperties,
} from '@/ComponentProperties';

describe('ResponsiveGrid ->', () => {
  const STANDARD_GRID_PROPS = {
    cqPath: '',
    gridClassNames: '',
    columnClassNames: {},
    allowedComponents: {
      applicable: false,
      components: [],
    },
    title: '',
    cqItems: {},
    cqItemsOrder: [],
  };
  const GRID_CLASS_NAMES = 'grid-class-names';
  const ROOT_CLASS_NAME = 'root-class';
  const CONTAINER_PATH = '/container';
  const PLACEHOLDER_CLASS_NAMES = 'aem-Grid-newComponent';
  const CONTAINER_PLACEHOLDER_SELECTOR = '.new.section';
  const CONTAINER_PLACEHOLDER_DATA_ATTRIBUTE_SELECTOR =
    '[data-cq-data-path="/container/*"]';
  const COLUMN_1_CLASS_NAMES = 'column-class-names-1';
  const COLUMN_2_CLASS_NAMES = 'column-class-names-2';
  const COLUMN_CLASS_NAMES = {
    component1: COLUMN_1_CLASS_NAMES,
    component2: COLUMN_2_CLASS_NAMES,
  };
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
  const ITEM_CLASS_NAME = 'item-class';
  const ITEM1_DATA_ATTRIBUTE_SELECTOR =
    '[data-cq-data-path="/container/component1"]';
  const ITEM2_DATA_ATTRIBUTE_SELECTOR =
    '[data-cq-data-path="/container/component2"]';

  let rootNode: HTMLDivElement | undefined;
  const ChildComponent = defineComponent({
    name: 'ChildComponent',
    inheritAttrs: false,
    props: {
      ...componentProperties(ITEM_CLASS_NAME),
    },
    setup() {
      const isInEditor = inject('isInEditor', false);
      return { isInEditor };
    },
    computed: {
      componentClass() {
        return componentClassNames(
          this.baseCssClass,
          this.appliedCssClassNames,
          this.containerProps,
          this.isInEditor,
          this.aemNoDecoration,
        );
      },
    },
    template: `
      <div :id='id' :class='componentClass' />`,
  });

  const getChildComponent = () => h(ChildComponent);

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

  describe('Grid class names ->', () => {
    it('should add the grid class names', () => {
      mount(ResponsiveGrid, {
        propsData: {
          ...STANDARD_GRID_PROPS,
        },
        global: {
          provide: {
            isInEditor: false,
            componentMapping: new ComponentMapping(),
          },
        },
        attachTo: rootNode,
      });

      const gridElement = rootNode!.querySelector(`.${GRID_CLASS_NAMES}`);

      expect(gridElement).toBeDefined();
    });
  });

  describe('Placeholder ->', () => {
    it('should add the expected placeholder class names', () => {
      mount(ResponsiveGrid, {
        propsData: {
          ...STANDARD_GRID_PROPS,
          cqPath: CONTAINER_PATH,
        },
        global: {
          provide: {
            isInEditor: true,
            componentMapping: new ComponentMapping(),
          },
        },
        attachTo: rootNode,
      });

      const gridPlaceholder = rootNode!.querySelector(
        `.${PLACEHOLDER_CLASS_NAMES}${CONTAINER_PLACEHOLDER_SELECTOR}${CONTAINER_PLACEHOLDER_DATA_ATTRIBUTE_SELECTOR}`,
      );

      expect(gridPlaceholder).toBeDefined();
    });
  });

  describe('Column class names ->', () => {
    it('should add the expected column class names', () => {
      ComponentMappingSpy.mockReturnValue(withEditable(getChildComponent()));
      mount(ResponsiveGrid, {
        propsData: {
          ...STANDARD_GRID_PROPS,
          columnClassNames: COLUMN_CLASS_NAMES,
          cqPath: CONTAINER_PATH,
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

      const childItem1 = rootNode!.querySelector(
        `.${COLUMN_1_CLASS_NAMES}${ITEM1_DATA_ATTRIBUTE_SELECTOR}`,
      );
      const childItem2 = rootNode!.querySelector(
        `.${COLUMN_2_CLASS_NAMES}${ITEM2_DATA_ATTRIBUTE_SELECTOR}`,
      );
      expect(childItem1).toBeDefined();
      expect(childItem2).toBeDefined();
    });
  });
});
