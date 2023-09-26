import { mount } from '@vue/test-utils';
import AllowedComponentsContainer from '@/components/AllowedComponentsContainer.vue';
import AllowedComponentPlaceholderList from '@/components/AllowedComponentPlaceholderList.vue';
import AllowedComponentPlaceholder from '@/components/AllowedComponentPlaceholder.vue';

describe('AllowedComponentsContainer ->', () => {
  const COMPONENT_TEXT_PATH = '/content/page/jcr:content/root/text';
  const COMPONENT_TEXT_TITLE = 'Text';
  const COMPONENT_IMAGE_PATH = '/content/page/jcr:content/root/image';
  const COMPONENT_IMAGE_TITLE = 'Image';

  const ALLOWED_COMPONENTS_NOT_APPLICABLE_DATA = {
    applicable: false,
    components: [],
  };

  const ALLOWED_COMPONENTS_EMPTY_DATA = {
    applicable: true,
    components: [],
  };

  const ALLOWED_COMPONENTS_DATA = {
    applicable: true,
    components: [
      {
        path: COMPONENT_TEXT_PATH,
        title: COMPONENT_TEXT_TITLE,
      },
      {
        path: COMPONENT_IMAGE_PATH,
        title: COMPONENT_IMAGE_TITLE,
      },
    ],
  };

  const ALLOWED_PLACEHOLDER_SELECTOR = '.aem-AllowedComponent--list';
  const ALLOWED_COMPONENT_TITLE_SELECTOR = '.aem-AllowedComponent--title';
  const ALLOWED_COMPONENT_PLACEHOLDER_SELECTOR =
    '.aem-AllowedComponent--component.cq-placeholder.placeholder';
  const CONTAINER_SELECTOR = '.aem-container';
  const CONTAINER_PLACEHOLDER_SELECTOR = '.new.section';
  const DEFAULT_TITLE = 'Layout Container';
  const DEFAULT_EMPTY_LABEL = 'Empty label tests';
  const ROOT_CLASS_NAME = 'root-class';

  let rootNode: HTMLDivElement | undefined;

  beforeEach(() => {
    rootNode = document.createElement('div');
    rootNode.className = ROOT_CLASS_NAME;
    document.body.appendChild(rootNode);
  });

  afterEach(() => {
    if (rootNode) {
      document.body.appendChild(rootNode);
      rootNode = undefined;
    }
  });

  describe('not applicable ->', () => {
    it('should NOT be applicable but have a default container placeholder', () => {
      mount(AllowedComponentsContainer, {
        propsData: {
          allowedComponents: ALLOWED_COMPONENTS_NOT_APPLICABLE_DATA,
        },
        global: {
          provide: {
            isInEditor: true,
          },
        },
        attachTo: rootNode,
      });

      const allowedComponentsContainer = rootNode!.querySelector(
        ALLOWED_PLACEHOLDER_SELECTOR,
      );

      expect(allowedComponentsContainer).toBeNull();

      const container = rootNode!.querySelector(CONTAINER_SELECTOR);

      expect(container).toBeDefined();

      const containerPlaceholder = container!.querySelector(
        CONTAINER_PLACEHOLDER_SELECTOR,
      );

      expect(containerPlaceholder).toBeDefined();
    });
  });

  describe('applicable ->', () => {
    it('should be applicable with an empty list of allowed components', () => {
      mount(AllowedComponentsContainer, {
        propsData: {
          allowedComponents: ALLOWED_COMPONENTS_EMPTY_DATA,
        },
        global: {
          provide: {
            isInEditor: true,
          },
        },
        attachTo: rootNode,
      });

      const allowedComponentsContainer = rootNode!.querySelector(
        ALLOWED_PLACEHOLDER_SELECTOR,
      );

      expect(allowedComponentsContainer).toBeDefined();

      const allowedComponentsTitle = allowedComponentsContainer!.querySelector(
        ALLOWED_COMPONENT_TITLE_SELECTOR,
      );

      expect(allowedComponentsTitle).toBeDefined();
      expect((allowedComponentsTitle as HTMLElement).dataset.text).toEqual(
        'No allowed components',
      );
      expect(
        allowedComponentsContainer!.querySelector(
          ALLOWED_COMPONENT_PLACEHOLDER_SELECTOR,
        ),
      ).toBeNull();
    });

    it('should be applicable with a list of allowed components', () => {
      mount(AllowedComponentsContainer, {
        propsData: {
          allowedComponents: ALLOWED_COMPONENTS_DATA,
          title: DEFAULT_TITLE,
        },
        global: {
          provide: {
            isInEditor: true,
          },
        },
        attachTo: rootNode,
      });

      const allowedComponentsContainer = rootNode!.querySelector(
        ALLOWED_PLACEHOLDER_SELECTOR,
      );

      expect(allowedComponentsContainer).toBeDefined();

      const allowedComponentsTitle = allowedComponentsContainer!.querySelector(
        ALLOWED_COMPONENT_TITLE_SELECTOR,
      );

      expect(allowedComponentsTitle).toBeDefined();
      expect((allowedComponentsTitle as HTMLElement).dataset.text).toEqual(
        DEFAULT_TITLE,
      );
      expect(
        allowedComponentsContainer!.querySelectorAll(
          ALLOWED_COMPONENT_PLACEHOLDER_SELECTOR,
        ).length,
      ).toEqual(2);
    });
  });

  describe('not in editor ->', () => {
    it('should be applicable with a list of allowed components but not in the editor', () => {
      mount(AllowedComponentsContainer, {
        propsData: {
          allowedComponents: ALLOWED_COMPONENTS_DATA,
        },
        global: {
          provide: {
            isInEditor: false,
          },
        },
        attachTo: rootNode,
      });

      const allowedComponentsContainer = rootNode!.querySelector(
        ALLOWED_PLACEHOLDER_SELECTOR,
      );

      expect(allowedComponentsContainer).toBeNull();

      const container = rootNode!.querySelector(CONTAINER_SELECTOR);

      expect(container).toBeDefined();

      const containerPlaceholder = container!.querySelector(
        CONTAINER_PLACEHOLDER_SELECTOR,
      );

      expect(containerPlaceholder).toBeNull();
    });
  });

  describe('AllowedComponentPlaceholderList ->', () => {
    it('should display two allowed components', () => {
      const placeHolderProperties = {
        placeholderClassNames: 'classNames',
        cqPath: '/some/path',
      };

      mount(AllowedComponentPlaceholderList, {
        propsData: {
          title: DEFAULT_TITLE,
          emptyLabel: DEFAULT_EMPTY_LABEL,
          components: ALLOWED_COMPONENTS_DATA.components,
          cqPath: '/some/path',
          placeholderProps: placeHolderProperties,
        },
        attachTo: rootNode,
      });

      const allowedComponentPlaceholderList = rootNode!.querySelector(
        ALLOWED_PLACEHOLDER_SELECTOR,
      );

      expect(allowedComponentPlaceholderList).toBeDefined();

      const allowedComponentsTitle =
        allowedComponentPlaceholderList!.querySelector(
          ALLOWED_COMPONENT_TITLE_SELECTOR,
        );

      expect(allowedComponentsTitle).toBeDefined();
      expect((allowedComponentsTitle as HTMLElement).dataset.text).toEqual(
        DEFAULT_TITLE,
      );
      expect(
        allowedComponentPlaceholderList!.querySelectorAll(
          ALLOWED_COMPONENT_PLACEHOLDER_SELECTOR,
        ).length,
      ).toEqual(2);
    });
  });

  describe('AllowedComponentPlaceholder ->', () => {
    it('should display a path, emptyLabel and the expected class names', () => {
      mount(AllowedComponentPlaceholder, {
        propsData: {
          path: COMPONENT_TEXT_PATH,
          emptyLabel: COMPONENT_TEXT_TITLE,
        },
        attachTo: rootNode,
      });

      const allowedComponentPlaceholder = rootNode!.querySelector(
        ALLOWED_COMPONENT_PLACEHOLDER_SELECTOR,
      );

      expect(allowedComponentPlaceholder).toBeDefined();
      expect(
        (allowedComponentPlaceholder as HTMLElement).dataset.emptytext,
      ).toEqual(COMPONENT_TEXT_TITLE);
      expect(
        (allowedComponentPlaceholder as HTMLElement).dataset.cqDataPath,
      ).toEqual(COMPONENT_TEXT_PATH);
    });
  });
});
