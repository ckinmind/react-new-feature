import React from 'react'
import {storiesOf} from '@storybook/react'

import README from  '../README.md'

storiesOf('React16 新特性总览', module)
  .add('新特性总览', () => <div />, {info: {text: README, inline: true, source: false, propTables: null}})
