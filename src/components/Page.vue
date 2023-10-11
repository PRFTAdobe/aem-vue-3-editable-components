<script lang="ts" setup>
  import { computed, h, inject, PropType, useAttrs, VNode } from 'vue';
  import { AuthoringUtils, Model } from '@adobe/aem-spa-page-model-manager';
  import { ComponentMapping } from '@adobe/aem-spa-component-mapping';
  import Utils from '@/utils/Utils';

  interface ChildProperties {
    cqType?: string;
    cqPath?: string;
  }

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

  const getItemPath = (itemKey: string) =>
    props.cqPath?.length > 0
      ? `${props.cqPath}/jcr:content/${itemKey}`
      : itemKey;

  const connectComponentWithItem = (
    itemComponent: VNode,
    itemProps: ChildProperties,
    itemKey: string,
  ) => {
    const itemPath = getItemPath(itemKey);

    return h(itemComponent, {
      ...itemProps,
      cqPath: itemPath,
      containerProps: {},
    });
  };

  const childComponents = computed((): VNode[] => {
    const childComponentNodes: VNode[] = [];

    if (
      Object.keys(props.cqItems).length > 0 &&
      props.cqItemsOrder.length > 0
    ) {
      props.cqItemsOrder.forEach((itemKey) => {
        const itemProps = Utils.modelToProps(
          props.cqItems[itemKey],
        ) as ChildProperties;

        if (itemProps && typeof itemProps.cqType !== 'undefined') {
          const itemComponent = componentMapping.get(itemProps.cqType) as VNode;

          if (itemComponent) {
            childComponentNodes.push(
              connectComponentWithItem(itemComponent, itemProps, itemKey),
            );
          }
        }
      });
    }

    return childComponentNodes;
  });

  const childPages = computed((): VNode[] => {
    const pages: VNode[] = [];
    if (Object.keys(props.cqChildren).length === 0) {
      return pages;
    }

    Object.keys(props.cqChildren).forEach((itemKey) => {
      const itemProps = Utils.modelToProps(
        props.cqChildren[itemKey],
      ) as ChildProperties;
      if (itemProps && typeof itemProps.cqType !== 'undefined') {
        const itemComponent = componentMapping.get(itemProps.cqType) as VNode;
        if (itemComponent) {
          pages.push(
            h(itemComponent, { ...itemProps, cqPath: itemProps.cqPath }),
          );
        }
      }
    });

    return pages;
  });

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
