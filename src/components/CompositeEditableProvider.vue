<script lang="ts" setup>
  import { Component, PropType, useAttrs, useSlots } from 'vue';
  // eslint-disable-next-line import/no-cycle
  import { EditConfig, MappedComponentProperties } from '@/ComponentMapping';
  import EditableProvider from '@/components/EditableProvider.vue';

  const props = defineProps({
    editConfig: {
      type: Object as PropType<EditConfig<MappedComponentProperties>>,
      default: () => ({
        isEmpty: () => false,
      }),
    },
  });

  const slots = useSlots();
  const attrs = useAttrs();

  defineOptions({
    inheritAttrs: false,
  });
</script>

<template>
  <EditableProvider
    v-bind="{ ...attrs, componentProperties: ({ ...attrs } as unknown as MappedComponentProperties), editConfig: props.editConfig }"
  >
    <component :is="(slots.default?.()[0] as Component)" />
  </EditableProvider>
</template>
