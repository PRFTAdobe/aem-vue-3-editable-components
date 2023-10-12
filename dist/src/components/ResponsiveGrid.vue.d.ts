import { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    aemNoDecoration: {
        type: BooleanConstructor;
        default: boolean;
    };
    cqPath: {
        type: StringConstructor;
        default: string;
    };
    gridClassNames: {
        type: StringConstructor;
    };
    columnClassNames: {
        type: PropType<{
            [key: string]: string;
        }>;
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
    cqPath: {
        type: StringConstructor;
        default: string;
    };
    gridClassNames: {
        type: StringConstructor;
    };
    columnClassNames: {
        type: PropType<{
            [key: string]: string;
        }>;
    };
    isInEditor: {
        type: BooleanConstructor;
        default: undefined;
    };
}>>, {
    cqPath: string;
    isInEditor: boolean;
    aemNoDecoration: boolean;
}, {}>;
export default _default;
