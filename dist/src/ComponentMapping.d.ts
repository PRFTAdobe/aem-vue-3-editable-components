import { ComponentMapping } from '@adobe/aem-spa-component-mapping';
import { Component } from 'vue';
interface ReloadForceAble {
    cqForceReload?: boolean;
}
export interface MappedComponentProperties extends ReloadForceAble {
    aemNoDecoration?: boolean;
    appliedCssClassNames?: string;
    cqHierarchyType?: string;
    cqPath: string;
    cqType?: string;
    isInEditor?: boolean;
}
export interface EditConfig<P extends MappedComponentProperties> {
    emptyLabel?: string;
    resourceType?: string;
    isEmpty(props: P): boolean;
}
export interface ReloadableModelProperties {
    forceReload?: boolean;
    /**
     * Should the component data be retrieved from the aem page model
     * and passed down as props on componentMount
     */
    injectPropsOnInit?: boolean;
}
declare const withContext: <P extends MappedComponentProperties>(wrappedComponent: Component<P>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>;
declare const withModel: <P extends MappedComponentProperties>(wrappedComponent: Component<P>, modelConfig?: ReloadableModelProperties) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>;
declare const withEditable: <P extends MappedComponentProperties>(wrappedComponent: Component<P>, editConfig?: EditConfig<P> | undefined) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>;
declare const MapTo: (resourceTypes: string | string[]) => <P extends MappedComponentProperties>(clazz: Component, editConfig?: EditConfig<P> | undefined, config?: ReloadableModelProperties) => void;
export { ComponentMapping, MapTo, withEditable, withModel, withContext };
