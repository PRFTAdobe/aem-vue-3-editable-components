import { PropType } from 'vue';
import { Model } from '@adobe/aem-spa-page-model-manager';
interface PageModel extends Model {
    ':type': string;
    id: string;
    ':path': string;
    ':children'?: {
        [key: string]: PageModel;
    };
}
declare const _default: import("vue").DefineComponent<{
    cqChildren: {
        type: PropType<{
            [key: string]: PageModel;
        }>;
        default: () => {};
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
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    cqChildren: {
        type: PropType<{
            [key: string]: PageModel;
        }>;
        default: () => {};
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
}>>, {
    cqPath: string;
    cqItems: {
        [key: string]: Model;
    };
    cqItemsOrder: string[];
    cqChildren: {
        [key: string]: PageModel;
    };
}, {}>;
export default _default;
