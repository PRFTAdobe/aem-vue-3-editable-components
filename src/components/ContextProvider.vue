<script lang="ts" setup>
  import { AuthoringUtils } from '@adobe/aem-spa-page-model-manager';
  import { ComponentMapping } from '@adobe/aem-spa-component-mapping';
  import { Component, inject, provide, useAttrs, useSlots } from 'vue';

  const slots = useSlots();
  const attrs = useAttrs();

  const componentMapping = inject('componentMapping', new ComponentMapping());
  const isInEditor = inject('isInEditor', AuthoringUtils.isInEditor());

  provide('isInEditor', isInEditor);
  provide('componentMapping', componentMapping);

  defineOptions({
    inheritAttrs: false,
  });
</script>

<template>
  <component :is="slots.default?.()[0] as Component" v-bind="{ ...attrs }" />
</template>
