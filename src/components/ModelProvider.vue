<template>
  <component
    :is="$slots.default?.()[0]"
    v-bind="{
      ...$attrs,
      pagePath: pagePath,
      itemPath: itemPath,
      cqPath: updatedCqPath,
      ...updatedProps,
    }"
  />
</template>

<script lang="ts">
  import { defineComponent, inject } from 'vue';
  import {
    AuthoringUtils,
    ModelManager,
    PathUtils,
  } from '@adobe/aem-spa-page-model-manager';
  import Utils from '@/utils/Utils';
  import { ListenerFunction } from '@adobe/aem-spa-page-model-manager/dist/ModelManager';

  export default defineComponent({
    name: 'ModelProvider',
    inheritAttrs: false,
    props: {
      cqForceReload: {
        type: Boolean,
        default: false,
      },
      cqPath: {
        type: String,
        default: '',
      },
      injectPropsOnInit: {
        type: Boolean,
        default: false,
      },
      itemPath: {
        type: String,
        default: '',
      },
      pagePath: {
        type: String,
        default: '',
      },
    },
    data(): {
      updateDataListener: (cqPath: string) => void | (() => void);
      updatedProps: NonNullable<unknown>;
    } {
      return {
        updatedProps: {},
        updateDataListener: () => {},
      };
    },
    computed: {
      updatedCqPath() {
        const {
          pagePath,
          itemPath,
          injectPropsOnInit,
          cqPath,
        }: {
          pagePath: string;
          itemPath: string;
          injectPropsOnInit: boolean;
          cqPath: string;
        } = this.$props;
        return Utils.getCQPath({
          pagePath,
          itemPath,
          injectPropsOnInit,
          cqPath,
        });
      },
    },
    mounted() {
      this.updateDataListener = this.updateData.bind(this);
      const cqPath = this.updatedCqPath;
      if (this.injectPropsOnInit) {
        this.updateData(cqPath);
      }
      ModelManager.addListener(
        cqPath,
        this.updateDataListener as ListenerFunction,
      );
    },
    unmounted() {
      const cqPath = this.updatedCqPath;
      ModelManager.removeListener(
        cqPath,
        this.updateDataListener as ListenerFunction,
      );
    },
    methods: {
      updateData(cqPath: string) {
        const isInEditor = inject('isInEditor', AuthoringUtils.isInEditor());
        const { pagePath, itemPath, injectPropsOnInit } = this.$props;
        const path =
          cqPath ||
          this.$props.cqPath ||
          (pagePath &&
            Utils.getCQPath({ pagePath, itemPath, injectPropsOnInit }));

        if (path) {
          ModelManager.getData({ path, forceReload: this.cqForceReload })
            .then((data) => {
              if (data && Object.keys(data).length > 0) {
                Object.assign(this.updatedProps, Utils.modelToProps(data));

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
      },
    },
  });
</script>
