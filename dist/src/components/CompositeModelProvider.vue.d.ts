import { PropType } from 'vue';
import { ReloadableModelProperties } from '../ComponentMapping';
declare const _default: import("vue").DefineComponent<{
    modelConfig: {
        type: PropType<ReloadableModelProperties>;
        default: () => {
            injectPropsOnInit: boolean;
            forceReload: boolean;
        };
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelConfig: {
        type: PropType<ReloadableModelProperties>;
        default: () => {
            injectPropsOnInit: boolean;
            forceReload: boolean;
        };
    };
}>>, {
    modelConfig: ReloadableModelProperties;
}, {}>;
export default _default;
