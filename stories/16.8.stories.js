import React from 'react'
import {storiesOf} from '@storybook/react'


import HKMD from '../src/16.8/hooks.md'

import UseStateExample from '../src/16.8/hooks-useState'

storiesOf('React 16.8', module)
  .add('Hooks', () => <div />, {info: {text: HKMD, inline: true, source: false, propTables: null}})
  .add('hooks-useState', () => <UseStateExample />, {info: {text: HKMD, inline: false, source: false, propTables: null}})
