<script lang="ts" setup>
  const props = defineProps({
    cqPath: {
      type: String,
      default: '',
    },
    // eslint-disable-next-line vue/require-default-prop
    placeholderClassNames: {
      type: String,
    },
  });
</script>

<template>
  <div
    :class="props.placeholderClassNames"
    :data-cq-data-path="`${props.cqPath}/*`"
  />
</template>
