<script lang="ts" setup>
  import {
    computed,
    inject,
    onMounted,
    onUpdated,
    PropType,
    useAttrs,
    VNode,
  } from 'vue';
  import { AuthoringUtils, Model } from '@adobe/aem-spa-page-model-manager';
  import { ComponentMapping } from '@adobe/aem-spa-component-mapping';
  import Utils from '@/utils/Utils';

  interface PageModel extends Model {
    ':type': string;
    id: string;
    ':path': string;
    ':children'?: { [key: string]: PageModel };
  }

  const attrs = useAttrs();

  const isInEditor = inject('isInEditor', AuthoringUtils.isInEditor());
  const componentMapping = inject('componentMapping', new ComponentMapping());

  const props = defineProps({
    aemNoDecoration: {
      type: Boolean,
      default: false,
    },
    // eslint-disable-next-line vue/require-default-prop
    cqChildren: {
      type: Object as PropType<{ [key: string]: PageModel }>,
      default: () => ({}),
    },
    cqItems: {
      type: Object as PropType<{
        [key: string]: Model;
      }>,
      default: () => ({}),
    },
    cqItemsOrder: {
      type: Array as PropType<Array<string>>,
      default: () => [],
    },
    cqPath: {
      type: String,
      default: '',
    },
  });

  const childComponents = computed((): VNode[] =>
    Utils.getChildComponents(
      props.cqPath,
      props.cqItems,
      props.cqItemsOrder,
      props.aemNoDecoration,
      () => ({}),
      true,
      componentMapping,
    ),
  );

  const childPages = computed((): VNode[] =>
    Utils.getChildPages(props.cqChildren, componentMapping),
  );

  const containerProps = computed(() => {
    const containerClassNames = ['aem-page'];
    if (attrs.cssClassNames) {
      containerClassNames.push(...(attrs.cssClassNames as string).split(' '));
    }
    const containerProperties: { [key: string]: string } = {
      class: containerClassNames.join(' '),
    };

    if (isInEditor) {
      containerProperties['data-cq-data-path'] = props.cqPath;
    }
    return containerProperties;
  });

  onMounted(() => {
    if (attrs.title) {
      document.title = attrs.title as string;
    }
  });

  onUpdated(() => {
    if (attrs.title) {
      document.title = attrs.title as string;
    }
  });

  defineOptions({
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Page',
    inheritAttrs: false,
  });
</script>

<template>
  <div v-bind="containerProps">
    <component
      :is="childComponent"
      v-for="childComponent of childComponents"
      :key="childComponent.toString()"
    />
    <component
      :is="childPage"
      v-for="childPage of childPages"
      :key="childPage.toString()"
    />
  </div>
</template>
