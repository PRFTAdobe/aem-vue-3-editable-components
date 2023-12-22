<script lang="ts" setup>
  import {
    AuthoringUtils,
    Model,
    ModelManager,
    PathUtils,
  } from '@adobe/aem-spa-page-model-manager';
  import {
    Component,
    computed,
    inject,
    onMounted,
    onUnmounted,
    PropType,
    useAttrs,
    useSlots,
  } from 'vue';
  import Utils from '@/utils/Utils';
  import { MappedComponentProperties } from '@/ComponentMapping';

  const props = defineProps({
    // eslint-disable-next-line vue/require-default-prop
    cqPath: {
      type: String,
    },
    cqForceReload: {
      type: Boolean,
      default: false,
    },
    injectPropsOnInit: {
      type: Boolean,
      default: false,
    },
    modelProperties: {
      type: Object as PropType<{ [key: string]: unknown }>,
      default: () => ({}),
    },
    // eslint-disable-next-line vue/require-default-prop
    pagePath: {
      type: String,
    },
    // eslint-disable-next-line vue/require-default-prop
    itemPath: {
      type: String,
    },
  });

  const slots = useSlots();
  const attrs = useAttrs();
  const isInEditor = inject('isInEditor', AuthoringUtils.isInEditor());
  const emit = defineEmits<{
    <P extends MappedComponentProperties>(
      e: 'updateModel',
      // eslint-disable-next-line no-use-before-define
      modelProps: P,
    ): void;
  }>();

  const updatedCqPath = computed(() => {
    const { pagePath, itemPath, injectPropsOnInit, cqPath } = props;
    return Utils.getCQPath({
      pagePath,
      itemPath,
      injectPropsOnInit,
      cqPath,
    });
  });

  const updateData = (cqPath: string) => {
    const { pagePath, itemPath, injectPropsOnInit } = props;
    const path =
      cqPath ||
      props.cqPath ||
      (pagePath && Utils.getCQPath({ pagePath, itemPath, injectPropsOnInit }));

    if (path) {
      ModelManager.getData({
        path,
        forceReload: props.cqForceReload,
      })
        .then((data: Model) => {
          if (data && Object.keys(data).length > 0) {
            emit('updateModel', {
              ...attrs,
              ...Utils.modelToProps(data),
              cqPath: updatedCqPath.value,
            });
            // Fire event once component model has been fetched and rendered to enable editing on AEM
            if (injectPropsOnInit && isInEditor) {
              PathUtils.dispatchGlobalCustomEvent(
                'cq-async-content-loaded',
                {},
              );
            }
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  const updateDataListener = updateData.bind(null, updatedCqPath.value);

  onMounted(() => {
    const cqPath = updatedCqPath.value;

    if (props.injectPropsOnInit) {
      updateData(cqPath);
    }
    ModelManager.addListener(cqPath, updateDataListener);
  });

  onUnmounted(() => {
    ModelManager.removeListener(props.cqPath!, updateDataListener);
  });

  defineOptions({
    inheritAttrs: false,
  });
</script>

<template>
  <component :is="slots.default?.()[0] as Component" v-bind="modelProperties" />
</template>
