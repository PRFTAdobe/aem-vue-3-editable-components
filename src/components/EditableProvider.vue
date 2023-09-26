<script lang="ts" setup>
  import { AuthoringUtils } from '@adobe/aem-spa-page-model-manager';
  import {
    Component,
    computed,
    inject,
    PropType,
    useAttrs,
    useSlots,
  } from 'vue';
  import { EditConfig, MappedComponentProperties } from '@/ComponentMapping';

  const props = defineProps({
    editConfig: {
      type: Object as PropType<EditConfig<MappedComponentProperties>>,
      default: () => ({
        isEmpty: () => false,
      }),
    },
    componentProperties: {
      type: Object as PropType<MappedComponentProperties>,
      default: () => ({}),
    },
    // eslint-disable-next-line vue/require-default-prop
    containerProps: {
      type: Object as PropType<{ [key: string]: string }>,
    },
  });

  // eslint-disable-next-line vue/no-setup-props-destructure
  const { editConfig } = props;
  const isInEditor = inject('isInEditor', AuthoringUtils.isInEditor());
  const slots = useSlots();
  const attrs = useAttrs();

  const editProps = computed(() => {
    const editProperties: { [key: string]: string } = {};
    const { componentProperties } = props;

    if (!isInEditor) {
      return editProperties;
    }

    editProperties['data-cq-data-path'] = componentProperties.cqPath;

    if (editConfig.resourceType) {
      editProperties['data-cq-resource-type'] = editConfig.resourceType;
    }

    return editProperties;
  });

  const styleProps = computed(() => {
    const styleProperties: { [key: string]: string } = {};
    const { componentProperties } = props;

    const { appliedCssClassNames } = componentProperties;

    const stylePropsClass = [];

    if (appliedCssClassNames) {
      stylePropsClass.push(appliedCssClassNames);
    }

    if (props?.containerProps?.class) {
      stylePropsClass.push(props.containerProps.class);
    }

    if (stylePropsClass.length) {
      styleProperties.class = stylePropsClass.join(' ');
    }
    return styleProperties;
  });

  const useEmptyPlaceholder =
    isInEditor &&
    typeof editConfig.isEmpty === 'function' &&
    // eslint-disable-next-line vue/no-setup-props-destructure
    editConfig.isEmpty(props.componentProperties);

  const emptyPlaceholderProps = computed(() => {
    if (!useEmptyPlaceholder) {
      return null;
    }

    return {
      class: 'cq-placeholder',
      'data-emptytext': editConfig.emptyLabel,
    };
  });

  defineOptions({
    inheritAttrs: false,
  });
</script>

<template>
  <component
    :is="slots.default?.()[0] as Component"
    v-if="
      !isInEditor &&
      componentProperties.hasOwnProperty('aemNoDecoration') &&
      componentProperties.aemNoDecoration
    "
    v-bind="{ ...attrs }"
  />
  <div v-else v-bind="{ ...editProps, ...styleProps }">
    <component
      :is="slots.default?.()[0] as Component"
      v-bind="{
        ...attrs,
        componentProperties: props.componentProperties,
      }"
    />
    <div v-if="emptyPlaceholderProps" v-bind="emptyPlaceholderProps" />
  </div>
</template>
