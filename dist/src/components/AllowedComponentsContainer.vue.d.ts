import { Model } from '@adobe/aem-spa-page-model-manager';
import { PropType } from 'vue';
interface AllowedComponent {
    path: string;
    title: string;
}
interface AllowedComponents {
    /**
     * Should AllowedComponents list be applied.
     */
    applicable: boolean;
    components: AllowedComponent[];
}
declare const _default: import("vue").DefineComponent<{
    _allowedComponentPlaceholderListEmptyLabel: {
        type: StringConstructor;
        default: string;
    };
    aemNoDecoration: {
        type: BooleanConstructor;
        default: boolean;
    };
    allowedComponents: {
        type: PropType<AllowedComponents>;
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
    title: {
        type: StringConstructor;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    _allowedComponentPlaceholderListEmptyLabel: {
        type: StringConstructor;
        default: string;
    };
    aemNoDecoration: {
        type: BooleanConstructor;
        default: boolean;
    };
    allowedComponents: {
        type: PropType<AllowedComponents>;
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
    title: {
        type: StringConstructor;
    };
}>>, {
    cqPath: string;
    isInEditor: boolean;
    aemNoDecoration: boolean;
    cqItems: {
        [key: string]: Model;
    };
    cqItemsOrder: string[];
    _allowedComponentPlaceholderListEmptyLabel: string;
}, {}>;
export default _default;
