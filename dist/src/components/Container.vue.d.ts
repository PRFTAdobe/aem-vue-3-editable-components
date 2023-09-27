import { PropType } from 'vue';
import { Model } from '@adobe/aem-spa-page-model-manager';
declare const _default: import("vue").DefineComponent<{
    aemNoDecoration: {
        type: BooleanConstructor;
        default: boolean;
    };
    appliedCssClassNames: {
        type: StringConstructor;
    };
    cqItems: {
        type: PropType<{
            [key: string]: Model;
        }>;
        default: () => {};
    };
    cqItemsOrder: {
        type: PropType<string[]>;
        default: () => never[];
    };
    cqPath: {
        type: StringConstructor;
        default: string;
    };
    getContainerProps: {
        type: FunctionConstructor;
    };
    getItemComponentProps: {
        type: FunctionConstructor;
    };
    getPlaceholderProps: {
        type: FunctionConstructor;
    };
    isInEditor: {
        type: BooleanConstructor;
        default: undefined;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    aemNoDecoration: {
        type: BooleanConstructor;
        default: boolean;
    };
    appliedCssClassNames: {
        type: StringConstructor;
    };
    cqItems: {
        type: PropType<{
            [key: string]: Model;
        }>;
        default: () => {};
    };
    cqItemsOrder: {
        type: PropType<string[]>;
        default: () => never[];
    };
    cqPath: {
        type: StringConstructor;
        default: string;
    };
    getContainerProps: {
        type: FunctionConstructor;
    };
    getItemComponentProps: {
        type: FunctionConstructor;
    };
    getPlaceholderProps: {
        type: FunctionConstructor;
    };
    isInEditor: {
        type: BooleanConstructor;
        default: undefined;
    };
}>>, {
    cqPath: string;
    aemNoDecoration: boolean;
    cqItems: {
        [key: string]: Model;
    };
    cqItemsOrder: string[];
    isInEditor: boolean;
}, {}>;
export default _default;
