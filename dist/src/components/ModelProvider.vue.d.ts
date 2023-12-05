declare const _default: import("vue").DefineComponent<{
    cqForceReload: {
        type: BooleanConstructor;
        default: boolean;
    };
    cqPath: {
        type: StringConstructor;
        default: string;
    };
    injectPropsOnInit: {
        type: BooleanConstructor;
        default: boolean;
    };
    itemPath: {
        type: StringConstructor;
        default: string;
    };
    pagePath: {
        type: StringConstructor;
        default: string;
    };
}, unknown, {
    updateDataListener: (cqPath: string) => void | (() => void);
    updatedProps: NonNullable<unknown>;
}, {
    updatedCqPath(): string;
}, {
    updateData(cqPath: string): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    cqForceReload: {
        type: BooleanConstructor;
        default: boolean;
    };
    cqPath: {
        type: StringConstructor;
        default: string;
    };
    injectPropsOnInit: {
        type: BooleanConstructor;
        default: boolean;
    };
    itemPath: {
        type: StringConstructor;
        default: string;
    };
    pagePath: {
        type: StringConstructor;
        default: string;
    };
}>>, {
    cqPath: string;
    cqForceReload: boolean;
    injectPropsOnInit: boolean;
    itemPath: string;
    pagePath: string;
}, {}>;
export default _default;
