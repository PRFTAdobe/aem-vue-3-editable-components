import { Model } from '@adobe/aem-spa-page-model-manager';
import { VNode } from 'vue';
import { ComponentMapping } from '../ComponentMapping.ts';
interface ChildProperties {
    cqType?: string;
    cqPath?: string;
    aemNoDecoration?: boolean;
}
interface ComponentProps {
    pagePath?: string;
    itemPath?: string;
    cqPath?: string;
    /**
     * Should the component data be retrieved from the aem page model
     * and passed down as props on componentMount
     */
    injectPropsOnInit?: boolean;
}
declare type ComponentMappingImpl = ComponentMapping;
interface PageModel extends Model {
    ':type': string;
    id: string;
    ':path': string;
    ':children'?: {
        [key: string]: PageModel;
    };
}
declare const Utils: {
    getItemPath(itemKey: string, cqPath: string, isPage: boolean): string;
    connectComponentWithItem(itemComponent: VNode, itemProps: ChildProperties, itemKey: string, cqPath: string, containerProps: (componentName?: string) => {
        class?: string;
    }, isPage: boolean): VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>;
    getChildComponents(cqPath: string, cqItems: {
        [key: string]: Model;
    }, cqItemsOrder: string[], aemNoDecoration: boolean, containerProps: (componentName?: string) => {
        class?: string;
    }, isPage: boolean, componentMapping: ComponentMappingImpl): VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    getChildPages(cqChildren: {
        [key: string]: PageModel;
    }, componentMapping: ComponentMappingImpl): VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    getCQPath(componentProps: ComponentProps): string;
    modelToProps(item: Model): {};
};
export default Utils;
