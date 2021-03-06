import React from 'react';
import { Button } from '@storybook/react/demo'
import {storiesOf} from '@storybook/react'


import CreateRefExample from '../src/16.3/createRef'
import CRMD from '../src/16.3/createRef.md'

import ForwardRefExample from '../src/16.3/forwardRef'
import FRMD from '../src/16.3/forwardRef.md'

import ContextProviderConsumerExample from '../src/16.3/context-provider-consumer'
import CTMD from '../src/16.3/context.md'

import GetDerivedStateFromPropsExample from '../src/16.3/getDerivedStateFromProps'
import GDMD from '../src/16.3/getDerivedStateFromProps.md'

import GetSnapshotBeforeUpdateExample from '../src/16.3/getSnapshotBeforeUpdate'
import GSMD from '../src/16.3/getSnapshotBeforeUpdate.md'

import StrictModeExample from '../src/16.3/strict-mode'
import SMMD from '../src/16.3/strict-mode.md'

storiesOf('React 16.3', module)
  .add('createRef', () => <CreateRefExample />, {info: {text: CRMD, inline: false, source: false, propTables: null}})
  .add('forwardRef', () => <ForwardRefExample />, {info: {text: FRMD, inline: false, source: false, propTables: null}})
  .add('context-Provider/Consumer', () => <ContextProviderConsumerExample />, {info: {text: CTMD, inline: false, source: false, propTables: null}})
  .add('getDerivedStateFromProps',() => <GetDerivedStateFromPropsExample />, {info: {text: GDMD, inline: false, source: false, propTables: null}})
  .add('getSnapshotBeforeUpdate', () => <GetSnapshotBeforeUpdateExample />, {info: {text: GSMD, inline: false, source: false, propTables: null}})
  .add('strict mode', () => <StrictModeExample />, {info: {text: SMMD, inline: false, source: false, propTables: null}})
