import { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    cqPath: {
        type: StringConstructor;
    };
    cqForceReload: {
        type: BooleanConstructor;
        default: boolean;
    };
    injectPropsOnInit: {
        type: BooleanConstructor;
        default: boolean;
    };
    modelProperties: {
        type: PropType<{
            [key: string]: unknown;
        }>;
        default: () => {};
    };
    pagePath: {
        type: StringConstructor;
    };
    itemPath: {
        type: StringConstructor;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    [x: string]: (...args: unknown[]) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    cqPath: {
        type: StringConstructor;
    };
    cqForceReload: {
        type: BooleanConstructor;
        default: boolean;
    };
    injectPropsOnInit: {
        type: BooleanConstructor;
        default: boolean;
    };
    modelProperties: {
        type: PropType<{
            [key: string]: unknown;
        }>;
        default: () => {};
    };
    pagePath: {
        type: StringConstructor;
    };
    itemPath: {
        type: StringConstructor;
    };
}>>, {
    cqForceReload: boolean;
    injectPropsOnInit: boolean;
    modelProperties: {
        [key: string]: unknown;
    };
}, {}>;
export default _default;
