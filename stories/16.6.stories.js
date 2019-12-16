import React from 'react'
import {storiesOf} from '@storybook/react'

import MemoExample  from '../src/16.6/memo'
import MMMD from '../src/16.6/memo.md'

import ContextContentTypeExample from '../src/16.6/context-contextType'
import CTMD from '../src/16.6/context-contextType.md'

storiesOf('React 16.6', module)
  .add('React.memo', () => <MemoExample />, {info: {text: MMMD, inline: false, source: false, propTables: null}})
  .add('context-contextType', () => <ContextContentTypeExample />, {info: {text: CTMD, inline: false, source: false, propTables: null}})

