import React from 'react'
import {storiesOf} from '@storybook/react'

import HKMD from '../src/16.8/hooks.md'

import UseStateExample from '../src/16.8/hooks-useState'
import UseEffectExample from '../src/16.8/hooks-useEffect'

import UseRefExample from '../src/16.8/hooks-useRef'
import URMD from '../src/16.8/hooks-useRef.md'

storiesOf('React 16.8', module)
  .add('Hooks', () => <div />, {info: {text: HKMD, inline: true, source: false, propTables: null}})
  .add('hooks-useState', () => <UseStateExample />, {info: {text: HKMD, inline: false, source: false, propTables: null}})
  .add('hooks-useEffect', () => <UseEffectExample />, {info: {text: HKMD, inline: false, source: false, propTables: null}})
  .add('hooks-useRef', () => <UseRefExample />, {info: {text: URMD, inline: false, source: false, propTables: null}})
