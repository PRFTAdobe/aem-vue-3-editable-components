import { PropType } from 'vue';

const componentClassNames = (
  baseCssClass: string | undefined,
  appliedCssClassNames: string | undefined,
  cssClassNames: string | undefined,
  containerProps: { [p: string]: string } | undefined,
  isInEditor: boolean,
  aemNoDecoration: boolean,
) => {
  let className: (
    | string
    | {
        [key: string]: boolean;
      }
  )[] = [];
  if (baseCssClass) {
    className = [baseCssClass];
  }
  if (appliedCssClassNames) {
    className.push(appliedCssClassNames);
  }
  if (cssClassNames) {
    className.push(...(cssClassNames as string).split(' '));
  }
  const containerPropsClass = containerProps?.class;
  if (aemNoDecoration && containerPropsClass && !isInEditor) {
    className.push(containerPropsClass);
  }
  return className;
};

const componentProperties = (baseCssClass: string) => ({
  aemNoDecoration: {
    type: Boolean,
    default: false,
  },
  appliedCssClassNames: {
    type: String,
  },
  baseCssClass: {
    type: String,
    default: baseCssClass,
  },
  containerProps: {
    type: Object as PropType<{ [key: string]: string }>,
    default: () => {},
  },
  cssClassNames: {
    type: String,
  },
  // eslint-disable-next-line vue/require-default-prop
  id: {
    type: String,
  },
});

export { componentClassNames, componentProperties };
