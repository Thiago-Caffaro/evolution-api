import assert from 'node:assert/strict';
import test from 'node:test';

import { buildInteractiveBizNode } from '../src/api/integrations/channel/whatsapp/helpers/interactiveMessage.helper';

test('builds the WhatsApp native-flow business node', () => {
  assert.deepEqual(buildInteractiveBizNode(), {
    tag: 'biz',
    attrs: {},
    content: [
      {
        tag: 'interactive',
        attrs: { type: 'native_flow', v: '1' },
        content: [
          {
            tag: 'native_flow',
            attrs: { v: '9', name: 'mixed' },
          },
        ],
      },
    ],
  });
});
