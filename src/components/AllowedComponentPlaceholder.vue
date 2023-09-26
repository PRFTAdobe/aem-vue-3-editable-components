<script lang="ts" setup>
  const props = defineProps({
    // eslint-disable-next-line vue/require-default-prop
    emptyLabel: {
      type: String,
    },
    // eslint-disable-next-line vue/require-default-prop
    path: {
      type: String,
    },
  });

  defineOptions({
    inheritAttrs: false,
  });
</script>

<template>
  <div
    :data-cq-data-path="props.path"
    :data-emptytext="props.emptyLabel"
    class="aem-AllowedComponent--component cq-placeholder placeholder"
  />
</template>
