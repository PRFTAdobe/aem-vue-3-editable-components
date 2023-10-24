<script lang="ts" setup>
  import { computed, PropType } from 'vue';
  import AllowedComponentPlaceholder from '@/components/AllowedComponentPlaceholder.vue';

  interface AllowedComponent {
    path: string;
    title: string;
  }

  interface PlaceHolderModel {
    placeholderClassNames: string;
    cqPath: string;
  }

  const props = defineProps({
    // eslint-disable-next-line vue/require-default-prop
    emptyLabel: {
      type: String,
    },
    // eslint-disable-next-line vue/require-default-prop
    components: {
      type: Array as PropType<Array<AllowedComponent>>,
    },
    // eslint-disable-next-line vue/require-default-prop
    placeholderProps: {
      type: Object as PropType<PlaceHolderModel>,
    },
    // eslint-disable-next-line vue/require-default-prop
    title: {
      type: String,
    },
    // eslint-disable-next-line vue/require-default-prop
    cqPath: {
      type: String,
    },
  });

  const listLabel = computed(() =>
    props.components && props.components.length > 0
      ? props.title
      : props.emptyLabel,
  );

  defineOptions({
    inheritAttrs: false,
  });
</script>

<template>
  <div
    :class="[
      'aem-AllowedComponent--list',
      props.placeholderProps?.placeholderClassNames,
    ]"
  >
    <div :data-text="listLabel" class="aem-AllowedComponent--title"></div>
    <AllowedComponentPlaceholder
      v-for="component of props.components"
      :key="component.path"
      :empty-label="component.title"
      :path="component.path"
    />
  </div>
</template>
