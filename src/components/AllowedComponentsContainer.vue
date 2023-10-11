<script lang="ts" setup>
  import { AuthoringUtils, Model } from '@adobe/aem-spa-page-model-manager';
  import { computed, inject, PropType, useAttrs } from 'vue';
  import AllowedComponentPlaceholderList from '@/components/AllowedComponentPlaceholderList.vue';
  import Container from '@/components/Container.vue';

  interface AllowedComponent {
    path: string;
    title: string;
  }

  interface AllowedComponents {
    /**
     * Should AllowedComponents list be applied.
     */
    applicable: boolean;
    components: AllowedComponent[];
  }

  const props = defineProps({
    // eslint-disable-next-line vue/prop-name-casing
    _allowedComponentPlaceholderListEmptyLabel: {
      type: String,
      default: 'No allowed components',
    },
    // eslint-disable-next-line vue/require-default-prop
    allowedComponents: {
      type: Object as PropType<AllowedComponents>,
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
    // eslint-disable-next-line vue/require-default-prop
    title: {
      type: String,
    },
  });

  const computedIsInEditor =
    typeof props.isInEditor !== 'undefined'
      ? props.isInEditor
      : inject('isInEditor', AuthoringUtils.isInEditor());

  const placeholderProps = computed(() => {
    if (typeof props.getPlaceholderProps === 'function') {
      return props.getPlaceholderProps();
    }
    return {
      cqPath: props.cqPath,
      placeholderClassNames: 'new section',
    };
  });

  const attrs = useAttrs();

  defineOptions({
    inheritAttrs: false,
  });
</script>
<template>
  <AllowedComponentPlaceholderList
    v-if="
      computedIsInEditor &&
      props.allowedComponents &&
      props.allowedComponents?.applicable
    "
    :components="props.allowedComponents.components"
    :cq-path="props.cqPath"
    :empty-label="props._allowedComponentPlaceholderListEmptyLabel"
    :placeholder-props="placeholderProps"
    :title="props.title"
  />
  <Container
    :cq-items="props.cqItems"
    :cq-items-order="props.cqItemsOrder"
    :cq-path="props.cqPath"
    :get-container-props="props.getContainerProps"
    :get-item-component-props="props.getItemComponentProps"
    :get-placeholder-props="props.getPlaceholderProps"
    :is-in-editor="computedIsInEditor"
    v-bind="{ ...attrs }"
  />
</template>
