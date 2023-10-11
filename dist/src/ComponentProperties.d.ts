declare const componentClassNames: (baseCssClass: string | undefined, appliedCssClassNames: string | undefined, containerProps: {
    [p: string]: string;
} | undefined, isInEditor: boolean) => (string | {
    [key: string]: boolean;
})[];
declare const componentProperties: (baseCssClass: string) => {
    appliedCssClassNames: {
        type: StringConstructor;
    };
    baseCssClass: {
        type: StringConstructor;
        default: string;
    };
    id: {
        type: StringConstructor;
    };
};
export { componentClassNames, componentProperties };
