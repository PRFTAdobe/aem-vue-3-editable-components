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

    if (props.editConfig.resourceType) {
      editProperties['data-cq-resource-type'] = props.editConfig.resourceType;
    }

    return editProperties;
  });

  const styleProps = computed(() => {
    const styleProperties: { [key: string]: string } = {};
    const { componentProperties } = props;

    const { appliedCssClassNames, cqType } = componentProperties;

    const stylePropsClass = [];

    if (appliedCssClassNames) {
      stylePropsClass.push(appliedCssClassNames);
    }

    if (props?.containerProps?.class) {
      stylePropsClass.push(props.containerProps.class);
    }

    if (cqType && cqType?.endsWith('/container')) {
      stylePropsClass.push('aem-editable');
    }

    if (stylePropsClass.length) {
      styleProperties.class = stylePropsClass.join(' ');
    }
    return styleProperties;
  });

  const emptyPlaceholderProps = computed(() => {
    if (
      !(
        isInEditor &&
        typeof props.editConfig.isEmpty === 'function' &&
        props.editConfig.isEmpty(props.componentProperties)
      )
    ) {
      return null;
    }

    return {
      class: 'cq-placeholder',
      'data-emptytext': props.editConfig.emptyLabel,
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
      (!isInEditor &&
        props.componentProperties.hasOwnProperty('aemNoDecoration') &&
        props.componentProperties.aemNoDecoration) ||
      (props.componentProperties.hasOwnProperty('cqHierarchyType') &&
        props.componentProperties.cqHierarchyType === 'page')
    "
    v-bind="{ ...attrs, containerProps: props.containerProps }"
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
