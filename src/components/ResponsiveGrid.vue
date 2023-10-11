<script lang="ts" setup>
  import { inject, PropType, useAttrs } from 'vue';
  import AllowedComponentsContainer from '@/components/AllowedComponentsContainer.vue';
  import { AuthoringUtils } from '@adobe/aem-spa-page-model-manager';

  const props = defineProps({
    aemNoDecoration: {
      type: Boolean,
      default: false,
    },
    cqPath: {
      type: String,
      default: '',
    },
    // eslint-disable-next-line vue/require-default-prop
    gridClassNames: {
      type: String,
    },
    // eslint-disable-next-line vue/require-default-prop
    columnClassNames: {
      type: Object as PropType<{ [key: string]: string }>,
    },
    isInEditor: {
      type: Boolean,
      default: undefined,
    },
  });

  const attrs = useAttrs();
  const computedIsInEditor =
    typeof props.isInEditor !== 'undefined'
      ? props.isInEditor
      : inject('isInEditor', AuthoringUtils.isInEditor());

  const getContainerProps = () => {
    const containerProperties: { [key: string]: string } = {};

    const containerPropertiesClass = ['aem-container'];

    if (props.gridClassNames) {
      containerPropertiesClass.push(props.gridClassNames);
    }

    containerProperties.class = containerPropertiesClass.join(' ');

    if (computedIsInEditor) {
      containerProperties['data-cq-data-path'] = props.cqPath;
    }

    return containerProperties;
  };

  const getPlaceholderProps = () => {
    const placeholderProperties: {
      cqPath: string;
      placeholderClassNames?: string;
    } = {
      cqPath: props.cqPath,
    };

    const placeholderPropertiesClass = [
      'new',
      'section',
      'aem-Grid-newComponent',
    ];

    placeholderProperties.placeholderClassNames =
      placeholderPropertiesClass.join(' ');

    return placeholderProperties;
  };

  const getItemComponentProps = (itemKey: string) => {
    const itemComponentProperties: {
      class?: string;
      'data-no-decoration'?: boolean;
    } = {};

    if (props.columnClassNames && props.columnClassNames[itemKey]) {
      itemComponentProperties.class = props.columnClassNames[itemKey];
    }

    if (props.aemNoDecoration) {
      itemComponentProperties['data-no-decoration'] = true;
    }

    return itemComponentProperties;
  };

  defineOptions({
    inheritAttrs: false,
  });
</script>

<template>
  <AllowedComponentsContainer
    :aem-no-decoration="props.aemNoDecoration"
    :cq-path="props.cqPath"
    :get-container-props="getContainerProps"
    :get-item-component-props="getItemComponentProps"
    :get-placeholder-props="getPlaceholderProps"
    :is-in-editor="computedIsInEditor"
    v-bind="{ ...attrs }"
  />
</template>
