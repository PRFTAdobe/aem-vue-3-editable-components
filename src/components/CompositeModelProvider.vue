<script lang="ts" setup>
  import { Component, PropType, ref, toRefs, useAttrs, useSlots } from 'vue';
  // eslint-disable-next-line import/no-cycle
  import {
    MappedComponentProperties,
    ReloadableModelProperties,
  } from '@/ComponentMapping';
  import ModelProvider from '@/components/ModelProvider.vue';

  const props = defineProps({
    modelConfig: {
      type: Object as PropType<ReloadableModelProperties>,
      default: () => ({ injectPropsOnInit: false, forceReload: false }),
    },
  });

  const slots = useSlots();
  const attrs = useAttrs();
  const modelProperties = ref(attrs as unknown as MappedComponentProperties);

  const { modelConfig } = toRefs(props);

  const cqForceReload = attrs.cqForceReload || modelConfig.value.forceReload;
  const { injectPropsOnInit } = modelConfig.value;

  const updateModelProperties = <P extends MappedComponentProperties>(
    modelProps: P,
  ) => {
    modelProperties.value = modelProps;
  };

  defineOptions({
    inheritAttrs: false,
  });
</script>
<template>
  <ModelProvider
    :cq-force-reload="cqForceReload as boolean"
    :inject-props-on-init="injectPropsOnInit"
    :model-properties="modelProperties"
    v-bind="modelProperties"
    @update-model="updateModelProperties"
  >
    <component :is="slots.default?.()[0] as Component" />
  </ModelProvider>
</template>
