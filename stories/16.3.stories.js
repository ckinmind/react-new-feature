import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';
import {storiesOf} from '@storybook/react'


import CreateRefExample from '../src/16.3/createRef'
import CRMD from '../src/16.3/createRef.md'

storiesOf('React 16.3', module)
  .add('CreateRef', () => <CreateRefExample />, {info: {text: CRMD, inline: false, source: false, propTables: null}})
