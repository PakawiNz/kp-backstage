import {
  createPlugin,
  createRoutableExtension,
  createComponentExtension,
} from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const kingpowerSystemAttributePlugin = createPlugin({
  id: 'kingpower-system-attribute',
  routes: {
    root: rootRouteRef,
  },
});

export const KingpowerSystemAttributePage =
  kingpowerSystemAttributePlugin.provide(
    createRoutableExtension({
      name: 'KingpowerSystemAttributePage',
      component: () =>
        import('./components/ExampleComponent').then(m => m.ExampleComponent),
      mountPoint: rootRouteRef,
    }),
  );

export const KingpowerSystemAttributeComponent =
  kingpowerSystemAttributePlugin.provide(
    createComponentExtension({
      name: 'KingpowerSystemAttributeComponent',
      component: {
        lazy: () =>
          import('./components/CardSystemAttributeComponent').then(
            m => m.CardSystemAttributeComponent,
          ),
      },
    }),
  );
