import React from 'react';
import { Button } from '@storybook/react/demo'
import {storiesOf} from '@storybook/react'


import CreateRefExample from '../src/16.3/createRef'
import CRMD from '../src/16.3/createRef.md'

import ForwardRefExample from '../src/16.3/forwardRef'
import FRMD from '../src/16.3/forwardRef.md'

storiesOf('React 16.3', module)
  .add('createRef', () => <CreateRefExample />, {info: {text: CRMD, inline: false, source: false, propTables: null}})
  .add('forwardRef', () => <ForwardRefExample />, {info: {text: FRMD, inline: false, source: false, propTables: null}})
