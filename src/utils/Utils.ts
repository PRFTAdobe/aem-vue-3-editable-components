import normalize from 'path-normalize';
import { Model } from '@adobe/aem-spa-page-model-manager';

interface ComponentProps {
  pagePath?: string;
  itemPath?: string;
  cqPath?: string;
  /**
   * Should the component data be retrieved from the aem page model
   * and passed down as props on componentMount
   */
  injectPropsOnInit?: boolean;
}

const Utils = {
  getCQPath(componentProps: ComponentProps) {
    const { pagePath = '', itemPath = '', injectPropsOnInit } = componentProps;
    let { cqPath = '' } = componentProps;
    if (injectPropsOnInit && !cqPath) {
      cqPath = normalize(
        itemPath ? `${pagePath}/jcr:content/${itemPath}` : pagePath,
      );
      cqPath = cqPath.replace(/^\.$/, '');
    }
    return cqPath;
  },
  modelToProps(item: Model) {
    const keys = Object.getOwnPropertyNames(item);
    const props = {};
    const transformToCQ = (propKey: string) => {
      const tempKey = propKey.substring(1);

      return `cq${tempKey.substring(0, 1).toUpperCase()}${tempKey.substring(
        1,
      )}`;
    };

    keys.forEach((key) => {
      let propKey: string = key;

      if (propKey.startsWith(':')) {
        propKey = transformToCQ(propKey);
      }

      // @ts-ignore
      props[propKey] = item[key];
    });

    return props;
  },
};

export default Utils;
