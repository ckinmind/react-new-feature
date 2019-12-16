import React from 'react'
import {action} from '@storybook/addon-actions'
import {Button} from '@storybook/react/demo'
import {storiesOf} from '@storybook/react'

import README165 from '../src/16.5/react16.5.md'

storiesOf('React 16.5', module)
  .add('React 16.5更新内容', () => <div />, {info: {text: README165, inline: true, source: false, propTables: null}})


