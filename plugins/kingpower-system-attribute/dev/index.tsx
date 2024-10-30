import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { kingpowerSystemAttributePlugin, KingpowerSystemAttributePage } from '../src/plugin';

createDevApp()
  .registerPlugin(kingpowerSystemAttributePlugin)
  .addPage({
    element: <KingpowerSystemAttributePage />,
    title: 'Root Page',
    path: '/kingpower-system-attribute',
  })
  .render();
