import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import CodeBlock from '../../components/CodeBlock';

import Documentation from './docs.md';

import {
  Blockie,
  Box,
} from 'rimble-ui';

storiesOf('Components/', module)
  .add('Blockie', withDocs(Documentation, () => (
      <Box mx={3}>
        <Box>
          <Blockie
            opts={{
              seed: 'foo',
              color: '#dfe',
              bgcolor: '#a71',
              size: 15,
              scale: 3,
              spotcolor: '#000',
            }}
          />

          <CodeBlock textOnly>
            {`<Blockie
  opts={{
    seed: 'foo',
    color: '#dfe',
    bgcolor: '#a71',
    size: 15,
    scale: 3,
    spotcolor: '#000',
  }}
/>`}
          </CodeBlock>
        </Box>
      </Box>
    ))
  )
