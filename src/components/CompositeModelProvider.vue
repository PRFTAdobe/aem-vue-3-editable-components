<script lang="ts" setup>
  import { Component, PropType, toRefs, useAttrs, useSlots } from 'vue';
  // eslint-disable-next-line import/no-cycle
  import { ReloadableModelProperties } from '@/ComponentMapping';
  import ModelProvider from '@/components/ModelProvider.vue';

  const props = defineProps({
    modelConfig: {
      type: Object as PropType<ReloadableModelProperties>,
      default: () => ({ injectPropsOnInit: false, forceReload: false }),
    },
  });

  const slots = useSlots();
  const attrs = useAttrs();

  const { modelConfig } = toRefs(props);

  const cqForceReload = attrs.cqForceReload || modelConfig.value.forceReload;
  const { injectPropsOnInit } = modelConfig.value;

  defineOptions({
    inheritAttrs: false,
  });
</script>
<template>
  <ModelProvider
    :cq-force-reload="cqForceReload as boolean"
    :inject-props-on-init="injectPropsOnInit"
    v-bind="{ ...attrs }"
  >
    <component :is="slots.default?.()[0] as Component" />
  </ModelProvider>
</template>
