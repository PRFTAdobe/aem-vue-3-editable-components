import { PropType } from 'vue';
declare const componentClassNames: (baseCssClass: string | undefined, appliedCssClassNames: string | undefined, cssClassNames: string | undefined, containerProps: {
    [p: string]: string;
} | undefined, isInEditor: boolean, aemNoDecoration: boolean) => (string | {
    [key: string]: boolean;
})[];
declare const componentProperties: (baseCssClass: string) => {
    aemNoDecoration: {
        type: BooleanConstructor;
        default: boolean;
    };
    appliedCssClassNames: {
        type: StringConstructor;
    };
    baseCssClass: {
        type: StringConstructor;
        default: string;
    };
    containerProps: {
        type: PropType<{
            [key: string]: string;
        }>;
        default: () => void;
    };
    cssClassNames: {
        type: StringConstructor;
    };
    id: {
        type: StringConstructor;
    };
};
export { componentClassNames, componentProperties };
