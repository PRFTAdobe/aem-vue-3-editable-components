import { Model } from '@adobe/aem-spa-page-model-manager';
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
declare const Utils: {
    getCQPath(componentProps: ComponentProps): string;
    modelToProps(item: Model): {};
};
export default Utils;
