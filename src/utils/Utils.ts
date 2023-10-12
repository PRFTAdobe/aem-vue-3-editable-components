import normalize from 'path-normalize';
import { Model } from '@adobe/aem-spa-page-model-manager';
import { h, VNode } from 'vue';
import { ComponentMapping } from '@/ComponentMapping.ts';

interface ChildProperties {
  cqType?: string;
  cqPath?: string;
  aemNoDecoration?: boolean;
}

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

declare type ComponentMappingImpl = ComponentMapping;

interface PageModel extends Model {
  ':type': string;
  id: string;
  ':path': string;
  ':children'?: { [key: string]: PageModel };
}

const Utils = {
  getItemPath(itemKey: string, cqPath: string, isPage: boolean) {
    let itemPath = cqPath?.length > 0 ? `${cqPath}/${itemKey}` : itemKey;
    if (isPage) {
      itemPath =
        cqPath?.length > 0 ? `${cqPath}/jcr:content/${itemKey}` : itemKey;
    }
    return itemPath;
  },
  connectComponentWithItem(
    itemComponent: VNode,
    itemProps: ChildProperties,
    itemKey: string,
    cqPath: string,
    containerProps: (componentName?: string) => { class?: string },
    isPage: boolean,
  ) {
    const itemPath = this.getItemPath(itemKey, cqPath, isPage);

    return h(itemComponent, {
      ...itemProps,
      cqPath: itemPath,
      containerProps: containerProps(itemKey),
    });
  },
  getChildComponents(
    cqPath: string,
    cqItems: { [key: string]: Model },
    cqItemsOrder: string[],
    aemNoDecoration: boolean,
    containerProps: (componentName?: string) => { class?: string },
    isPage: boolean,
    componentMapping: ComponentMappingImpl,
  ) {
    const childComponentNodes: VNode[] = [];

    if (Object.keys(cqItems).length > 0 && cqItemsOrder.length > 0) {
      cqItemsOrder.forEach((itemKey) => {
        const itemProps = this.modelToProps(
          cqItems[itemKey],
        ) as ChildProperties;

        if (itemProps && typeof itemProps.cqType !== 'undefined') {
          const itemComponent = componentMapping.get(itemProps.cqType) as VNode;

          if (aemNoDecoration) {
            itemProps.aemNoDecoration = aemNoDecoration;
          }

          if (itemComponent) {
            childComponentNodes.push(
              this.connectComponentWithItem(
                itemComponent,
                itemProps,
                itemKey,
                cqPath,
                containerProps,
                isPage,
              ),
            );
          }
        }
      });
    }

    return childComponentNodes;
  },
  getChildPages(
    cqChildren: { [key: string]: PageModel },
    componentMapping: ComponentMappingImpl,
  ) {
    const pages: VNode[] = [];
    if (Object.keys(cqChildren).length === 0) {
      return pages;
    }

    Object.keys(cqChildren).forEach((itemKey) => {
      const itemProps = this.modelToProps(
        cqChildren[itemKey],
      ) as ChildProperties;
      if (itemProps && typeof itemProps.cqType !== 'undefined') {
        const itemComponent = componentMapping.get(itemProps.cqType) as VNode;
        if (itemComponent) {
          pages.push(
            h(itemComponent, { ...itemProps, cqPath: itemProps.cqPath }),
          );
        }
      }
    });

    return pages;
  },
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
