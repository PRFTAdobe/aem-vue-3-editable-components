import { PropType } from 'vue';
interface AllowedComponent {
    path: string;
    title: string;
}
interface PlaceHolderModel {
    placeholderClassNames: string;
    cqPath: string;
}
declare const _default: import("vue").DefineComponent<{
    emptyLabel: {
        type: StringConstructor;
    };
    components: {
        type: PropType<AllowedComponent[]>;
    };
    placeholderProps: {
        type: PropType<PlaceHolderModel>;
    };
    title: {
        type: StringConstructor;
    };
    cqPath: {
        type: StringConstructor;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    emptyLabel: {
        type: StringConstructor;
    };
    components: {
        type: PropType<AllowedComponent[]>;
    };
    placeholderProps: {
        type: PropType<PlaceHolderModel>;
    };
    title: {
        type: StringConstructor;
    };
    cqPath: {
        type: StringConstructor;
    };
}>>, {}, {}>;
export default _default;
