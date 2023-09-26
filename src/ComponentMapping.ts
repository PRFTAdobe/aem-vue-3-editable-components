import { ComponentMapping } from '@adobe/aem-spa-component-mapping';
import { Component, h } from 'vue';
import CompositeEditableProvider from '@/components/CompositeEditableProvider.vue';
import CompositeModelProvider from '@/components/CompositeModelProvider.vue';
import ContextProvider from '@/components/ContextProvider.vue';

interface ReloadForceAble {
  /*
   * Should the model cache be ignored when processing the component.
   */
  cqForceReload?: boolean;
}

export interface MappedComponentProperties extends ReloadForceAble {
  isInEditor: boolean;
  cqPath: string;
  appliedCssClassNames?: string;
  aemNoDecoration?: boolean;
}

export interface EditConfig<P extends MappedComponentProperties> {
  emptyLabel?: string;
  resourceType?: string;

  isEmpty(props: P): boolean;
}

export interface ReloadableModelProperties {
  /*
   * Should the model cache be ignored when processing the component.
   */
  forceReload?: boolean;
  /**
   * Should the component data be retrieved from the aem page model
   * and passed down as props on componentMount
   */
  injectPropsOnInit?: boolean;
}

const withContext = <P extends MappedComponentProperties>(
  wrappedComponent: Component<P>
) => h(ContextProvider, {}, () => [h(wrappedComponent)]);

const withModel = <P extends MappedComponentProperties>(
  wrappedComponent: Component<P>,
  modelConfig?: ReloadableModelProperties
) => h(CompositeModelProvider, { modelConfig }, () => [h(wrappedComponent)]);

const withEditable = <P extends MappedComponentProperties>(
  wrappedComponent: Component<P>,
  editConfig?: EditConfig<P>
) => h(CompositeEditableProvider, { editConfig }, () => [h(wrappedComponent)]);

const withMappable = <P extends MappedComponentProperties>(
  component: Component<P>,
  editConfig?: EditConfig<P>,
  config?: ReloadableModelProperties
): Component<P> => {
  const {
    injectPropsOnInit = true,
    forceReload = false,
    ...rest
  } = config || {};
  const modelConfig: ReloadableModelProperties = {
    injectPropsOnInit,
    forceReload,
    ...rest,
  };
  let mappedComponent: Component<P> = component;

  mappedComponent = withContext(
    withModel(withEditable(mappedComponent, editConfig), modelConfig)
  );

  return mappedComponent;
};

/**
 * @private
 */
const wrappedMapFunction = ComponentMapping.map;

/**
 * @private
 */
const wrappedGetFunction = ComponentMapping.get;

ComponentMapping.map = function map(
  resourceTypes: string | string[],
  component: Component,
  editConfig = {
    isEmpty: () => false,
  },
  config: ReloadableModelProperties = {}
) {
  const { injectPropsOnInit = false, ...rest } = config || {};
  const innerComponent = withMappable(component, editConfig, {
    injectPropsOnInit,
    ...rest,
  });

  wrappedMapFunction.call(ComponentMapping, resourceTypes, innerComponent);

  return innerComponent;
};

ComponentMapping.get = wrappedGetFunction;

const MapTo =
  (resourceTypes: string | string[]) =>
  (
    clazz: Component,
    editConfig?: EditConfig<MappedComponentProperties>,
    config: ReloadableModelProperties = {}
  ) =>
    // @ts-ignore
    ComponentMapping.map(resourceTypes, clazz, editConfig, config);

export { ComponentMapping, MapTo, withEditable, withModel, withContext };
