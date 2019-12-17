import React from 'react'
import {storiesOf} from '@storybook/react'


import HKMD from '../src/16.8/hooks.md'

storiesOf('React 16.8', module)
  .add('Hooks', () => <div />, {info: {text: HKMD, inline: false, source: false, propTables: null}})
