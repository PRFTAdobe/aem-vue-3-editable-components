<script lang="ts" setup>
  import { computed, inject, PropType, VNode } from 'vue';
  import { AuthoringUtils, Model } from '@adobe/aem-spa-page-model-manager';
  import { ComponentMapping } from '@adobe/aem-spa-component-mapping';
  import Utils from '@/utils/Utils';
  import ContainerPlaceholder from '@/components/ContainerPlaceholder.vue';

  interface ContainerProps {
    (componentName?: string | undefined): { class?: string | undefined };
  }

  const props = defineProps({
    aemNoDecoration: {
      type: Boolean,
      default: false,
    },
    // eslint-disable-next-line vue/require-default-prop
    appliedCssClassNames: {
      type: String,
    },
    cqItems: {
      type: Object as PropType<{
        [key: string]: Model;
      }>,
      default: () => ({}),
    },
    cqItemsOrder: {
      type: Array as PropType<Array<string>>,
      default: () => [],
    },
    cqPath: {
      type: String,
      default: '',
    },
    // eslint-disable-next-line vue/require-default-prop
    getContainerProps: {
      type: Function,
    },
    // eslint-disable-next-line vue/require-default-prop
    getItemComponentProps: {
      type: Function,
    },
    // eslint-disable-next-line vue/require-default-prop
    getPlaceholderProps: {
      type: Function,
    },
    isInEditor: {
      type: Boolean,
      default: undefined,
    },
  });

  const computedIsInEditor =
    typeof props.isInEditor !== 'undefined'
      ? props.isInEditor
      : inject('isInEditor', AuthoringUtils.isInEditor());
  const componentMapping = inject('componentMapping', new ComponentMapping());

  const containerProps = computed(() => {
    let containerProperties: { [key: string]: string } = {};
    if (typeof props.getContainerProps === 'function') {
      containerProperties = props.getContainerProps();
    } else {
      containerProperties = {
        class: 'aem-container',
      };

      if (computedIsInEditor) {
        containerProperties['data-cq-data-path'] = props.cqPath;
      }
    }

    return containerProperties;
  });

  const childComponents = computed((): VNode[] =>
    Utils.getChildComponents(
      props.cqPath,
      props.cqItems,
      props.cqItemsOrder,
      props.aemNoDecoration,
      typeof props.getItemComponentProps === 'function'
        ? (props.getItemComponentProps as ContainerProps)
        : () => ({}),
      false,
      componentMapping,
    ),
  );

  const placeholderProps = computed(() => {
    if (typeof props.getPlaceholderProps === 'function') {
      return props.getPlaceholderProps();
    }
    return {
      cqPath: props.cqPath,
      placeholderClassNames: 'new section',
    };
  });

  defineOptions({
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Container',
    inheritAttrs: false,
  });
</script>

<template>
  <div v-bind="{ ...containerProps }">
    <component
      :is="childComponent"
      v-for="childComponent of childComponents"
      :key="childComponent.toString()"
    />
    <ContainerPlaceholder v-if="computedIsInEditor" v-bind="placeholderProps" />
  </div>
</template>
