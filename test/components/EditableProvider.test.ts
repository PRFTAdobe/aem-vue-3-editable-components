import { mount } from '@vue/test-utils';
import { defineComponent, h } from 'vue';
import {
  EditConfig,
  MappedComponentProperties,
  withEditable,
} from '@/ComponentMapping';

describe('EditableProvider', () => {
  const COMPONENT_RESOURCE_TYPE = '/component/resource/type';
  const COMPONENT_PATH = '/path/to/component';
  const CHILD_COMPONENT_CLASS_NAME = 'child-class';
  const CHILD_COMPONENT_APPLIED_STYLE_CLASS_NAME = 'my-custom-style';
  const IN_EDITOR_CLASS_NAME = 'in-editor-class';
  const GRID_CLASS_NAME = 'aem-grid-column-x';
  const EMPTY_LABEL = 'Empty Label';
  const EMPTY_TEXT_SELECTOR = `[data-emptytext="${EMPTY_LABEL}"]`;
  const DATA_PATH_ATTRIBUTE_SELECTOR = `[data-cq-data-path="${COMPONENT_PATH}"]`;
  const PLACEHOLDER_CLASS_NAMES = 'cq-placeholder';
  const DATA_RESOURCE_TYPE_SELECTOR = `[data-cq-resource-type="${COMPONENT_RESOURCE_TYPE}"]`;
  const ROOT_CLASS_NAME = 'root-class';

  const CQ_PROPS: {
    aemNoDecoration?: boolean;
    appliedCssClassNames?: string;
    containerProps: {
      class: string;
    };
    cqType: string;
    cqPath: string;
  } = {
    cqType: COMPONENT_RESOURCE_TYPE,
    cqPath: COMPONENT_PATH,
    appliedCssClassNames: CHILD_COMPONENT_APPLIED_STYLE_CLASS_NAME,
    containerProps: {
      class: GRID_CLASS_NAME,
    },
  };

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

  let rootNode: HTMLDivElement | undefined;

  const createVueWrapper = (
    editConfig: EditConfig<MappedComponentProperties>,
    isInEditor: boolean,
    otherCQProps: typeof CQ_PROPS | null = null,
  ) => {
    const className = [CHILD_COMPONENT_CLASS_NAME];
    if (isInEditor) {
      className.push(IN_EDITOR_CLASS_NAME);
    }
    let properties = CQ_PROPS;
    if (otherCQProps) {
      properties = otherCQProps;
    }
    return mount(
      withEditable(
        () =>
          h(ChildComponent, {
            className: className.join(' '),
          }),
        editConfig,
      ),
      {
        propsData: {
          ...properties,
        },
        global: {
          provide: {
            isInEditor,
          },
        },
        attachTo: rootNode,
      },
    );
  };

  beforeEach(() => {
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

  describe('Component emptiness ->', () => {
    it('should declare the component to be empty', () => {
      const EDIT_CONFIG = {
        isEmpty() {
          return true;
        },
        emptyLabel: EMPTY_LABEL,
      };

      createVueWrapper(EDIT_CONFIG, true);

      const node = rootNode!.querySelector(
        `${DATA_PATH_ATTRIBUTE_SELECTOR} .${CHILD_COMPONENT_CLASS_NAME} + .${PLACEHOLDER_CLASS_NAMES}${EMPTY_TEXT_SELECTOR}`,
      );
      expect(node).not.toBeNull();
    });

    it('should declare the component to be empty without providing a label', () => {
      const EDIT_CONFIG = {
        isEmpty() {
          return true;
        },
      };

      createVueWrapper(EDIT_CONFIG, true);

      const node = rootNode!.querySelector(
        `${DATA_PATH_ATTRIBUTE_SELECTOR} .${CHILD_COMPONENT_CLASS_NAME} + .${PLACEHOLDER_CLASS_NAMES}`,
      );
      expect(node).not.toBeNull();
    });

    it('should declare the component as not being in the editor', () => {
      const EDIT_CONFIG = {
        isEmpty() {
          return true;
        },
      };

      createVueWrapper(EDIT_CONFIG, false);

      let node = rootNode!.querySelector(
        `.cq-placeholder${EMPTY_TEXT_SELECTOR}`,
      );

      expect(node).toBeNull();

      node = rootNode!.querySelector(
        `${DATA_PATH_ATTRIBUTE_SELECTOR} .${CHILD_COMPONENT_CLASS_NAME} + .${PLACEHOLDER_CLASS_NAMES}`,
      );

      expect(node).toBeNull();
    });

    it('should declare the component not to be empty', () => {
      const EDIT_CONFIG = {
        isEmpty() {
          return false;
        },
      };

      createVueWrapper(EDIT_CONFIG, true);

      let node = rootNode!.querySelector(
        `.${CHILD_COMPONENT_CLASS_NAME} + .${PLACEHOLDER_CLASS_NAMES}`,
      );

      expect(node).toBeNull();

      node = rootNode!.querySelector(
        `${DATA_PATH_ATTRIBUTE_SELECTOR} .${CHILD_COMPONENT_CLASS_NAME}`,
      );

      expect(node).not.toBeNull();
    });
  });

  describe('resouceType attribute ->', () => {
    it('should have the data-cq-resource-type attribute set when passing this via the Editconfig', () => {
      const EDIT_CONFIG = {
        isEmpty() {
          return false;
        },
        emptyLabel: EMPTY_LABEL,
        resourceType: COMPONENT_RESOURCE_TYPE,
      };

      createVueWrapper(EDIT_CONFIG, true);

      const node = rootNode!.querySelector(DATA_RESOURCE_TYPE_SELECTOR);

      expect(node).not.toBeNull();
    });

    it('should NOT have the data-cq-resource-type attribute set when NOT passing it via the Editconfig', () => {
      const EDIT_CONFIG = {
        isEmpty() {
          return false;
        },
        emptyLabel: EMPTY_LABEL,
      };

      createVueWrapper(EDIT_CONFIG, false);

      const node = rootNode!.querySelector(DATA_RESOURCE_TYPE_SELECTOR);

      expect(node).toBeNull();
    });
  });

  describe('resouceType attribute ->', () => {
    it('should have the className attribute containing appliedCssClasses value appended/set to pre-existing className if any set', () => {
      const EDIT_CONFIG = {
        isEmpty() {
          return false;
        },
        emptyLabel: EMPTY_LABEL,
        resourceType: COMPONENT_RESOURCE_TYPE,
      };

      createVueWrapper(EDIT_CONFIG, true);

      const node = rootNode!.querySelector(
        `${DATA_PATH_ATTRIBUTE_SELECTOR}.${CQ_PROPS.appliedCssClassNames}`,
      );

      expect(node).not.toBeNull();
    });

    it('should not have any custom CSS classes if appliedCssClasses is empty or not set', () => {
      const EDIT_CONFIG = {
        isEmpty() {
          return false;
        },
        emptyLabel: EMPTY_LABEL,
        resourceType: COMPONENT_RESOURCE_TYPE,
      };

      const { appliedCssClassNames, ...otherCQProps } = CQ_PROPS;

      createVueWrapper(EDIT_CONFIG, true, otherCQProps);

      const node = rootNode!.querySelector(
        `${DATA_PATH_ATTRIBUTE_SELECTOR}.${appliedCssClassNames}`,
      );

      expect(node).toBeNull();
    });

    it('if aem grid column styles set, appliedCssClassNames should not override the grid styles', () => {
      const EDIT_CONFIG = {
        isEmpty() {
          return false;
        },
        emptyLabel: EMPTY_LABEL,
        resourceType: COMPONENT_RESOURCE_TYPE,
      };

      createVueWrapper(EDIT_CONFIG, true);

      const node = rootNode!.querySelector(`.${GRID_CLASS_NAME}`);

      expect(node).not.toBeNull();
    });
  });

  describe('component decoration ->', () => {
    it('if aemNoDecoration is set to true, there should not be a component div wrapper', () => {
      const EDIT_CONFIG = {
        isEmpty() {
          return false;
        },
        emptyLabel: EMPTY_LABEL,
        resourceType: COMPONENT_RESOURCE_TYPE,
      };

      createVueWrapper(EDIT_CONFIG, false, {
        ...CQ_PROPS,
        aemNoDecoration: true,
      });

      const node = rootNode!.querySelector(`.${CQ_PROPS.appliedCssClassNames}`);

      expect(node).toBeNull();
    });
  });
});
