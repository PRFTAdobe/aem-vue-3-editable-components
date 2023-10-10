import { PropType } from 'vue';
import { EditConfig, MappedComponentProperties } from '../ComponentMapping';
declare const _default: import("vue").DefineComponent<{
    editConfig: {
        type: PropType<EditConfig<MappedComponentProperties>>;
        default: () => {
            isEmpty: () => false;
        };
    };
    componentProperties: {
        type: PropType<MappedComponentProperties>;
        default: () => {};
    };
    containerProps: {
        type: PropType<{
            [key: string]: string;
        }>;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    editConfig: {
        type: PropType<EditConfig<MappedComponentProperties>>;
        default: () => {
            isEmpty: () => false;
        };
    };
    componentProperties: {
        type: PropType<MappedComponentProperties>;
        default: () => {};
    };
    containerProps: {
        type: PropType<{
            [key: string]: string;
        }>;
    };
}>>, {
    editConfig: EditConfig<MappedComponentProperties>;
    componentProperties: MappedComponentProperties;
}, {}>;
export default _default;
