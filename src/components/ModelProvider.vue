<script lang="ts" setup>
  import {
    AuthoringUtils,
    Model,
    ModelManager,
    PathUtils,
  } from '@adobe/aem-spa-page-model-manager';
  import {
    Component,
    inject,
    onMounted,
    onUnmounted,
    PropType,
    reactive,
    useSlots,
    watch,
  } from 'vue';
  import Utils from '@/utils/Utils';

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
    // eslint-disable-next-line vue/require-default-prop
    itemPath: {
      type: String,
    },
    modelProperties: {
      type: Object as PropType<{ [key: string]: unknown }>,
      default: () => ({}),
    },
    // eslint-disable-next-line vue/require-default-prop
    pagePath: {
      type: String,
    },
  });

  const slots = useSlots();
  const isInEditor = inject('isInEditor', AuthoringUtils.isInEditor());
  const updatedModelProperties = reactive(props.modelProperties);

  const updatedCqPath = () => {
    const { pagePath, itemPath, injectPropsOnInit, cqPath } = props;
    return Utils.getCQPath({
      pagePath,
      itemPath,
      injectPropsOnInit,
      cqPath,
    });
  };

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
            Object.assign(updatedModelProperties, Utils.modelToProps(data));
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

  const updateDataListener = updateData.bind(null, updatedCqPath());

  onMounted(() => {
    const cqPath = updatedCqPath();

    if (props.injectPropsOnInit) {
      updateData(cqPath);
    }
    ModelManager.addListener(cqPath, updateDataListener);
  });

  onUnmounted(() => {
    ModelManager.removeListener(props.cqPath!, updateDataListener);
  });

  watch(
    () => props.modelProperties,
    async (current, previous) => {
      if (JSON.stringify(current) !== JSON.stringify(previous)) {
        Object.assign(updatedModelProperties, props.modelProperties);
      }
    },
  );

  defineOptions({
    inheritAttrs: false,
  });
</script>

<template>
  <component
    :is="slots.default?.()[0] as Component"
    :key="props.modelProperties"
    v-bind="{
      ...updatedModelProperties,
      cqPath: updatedCqPath(),
    }"
  />
</template>
