import { defineComponent, h, inject } from 'vue';
import { mount } from '@vue/test-utils';
import { ComponentMapping } from '@/ComponentMapping';
import ContextProvider from '@/components/ContextProvider.vue';

describe('ContextProvider', () => {
  const CHILD_COMPONENT_CLASS_NAME = 'child-class';
  const IN_EDITOR_CLASS_NAME = 'in-editor-class';
  const HAS_COMPONENT_MAPPING_CLASS_NAME = 'has-component-mapping-class';

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
    setup() {
      const isInEditor = inject('isInEditor');
      const componentMapping = inject('componentMapping');
      return { isInEditor, componentMapping };
    },
    computed: {
      componentMappingIsDefined() {
        return this.componentMapping instanceof ComponentMapping;
      },
    },
    template: `
      <div :id='id'
           :class='[
             this.className,
             { IN_EDITOR_CLASS_NAME: this.isInEditor },
             { HAS_COMPONENT_MAPPING_CLASS_NAME: this.componentMappingIsDefined }
             ]' />`,
  });

  const getChildComponent = () =>
    h(ChildComponent, {
      className: [CHILD_COMPONENT_CLASS_NAME].join(' '),
    });

  describe('isInEditor Provider/Consumer ->', () => {
    it('should propagate its value - true', () => {
      const wrapper = mount(ContextProvider, {
        slots: {
          default: [getChildComponent()],
        },
        global: {
          provide: {
            isInEditor: true,
          },
        },
      });

      const childItem = wrapper.element.querySelector(
        `.${IN_EDITOR_CLASS_NAME}`,
      );

      expect(childItem).toBeDefined();
    });

    it('should propagate its value - false', () => {
      const wrapper = mount(ContextProvider, {
        slots: {
          default: [getChildComponent()],
        },
        global: {
          provide: {
            isInEditor: false,
          },
        },
      });

      const childItem = wrapper.element.querySelector(
        `.${IN_EDITOR_CLASS_NAME}`,
      );

      expect(childItem).toBeNull();
    });
  });

  describe('componentMapping Provider/Consumer ->', () => {
    it('should propagate component mapping', () => {
      const wrapper = mount(ContextProvider, {
        slots: {
          default: [getChildComponent()],
        },
        global: {
          provide: {
            componentMapping: new ComponentMapping(),
          },
        },
      });

      const childItem = wrapper.element.querySelector(
        `.${HAS_COMPONENT_MAPPING_CLASS_NAME}`,
      );

      expect(childItem).toBeDefined();
    });

    it('should propagate an empty object', () => {
      const wrapper = mount(ContextProvider, {
        slots: {
          default: [getChildComponent()],
        },
        global: {
          provide: {
            componentMapping: {},
          },
        },
      });

      const childItem = wrapper.element.querySelector(
        `.${HAS_COMPONENT_MAPPING_CLASS_NAME}`,
      );

      expect(childItem).toBeNull();
    });
  });
});
