import React from 'react'
import {action} from '@storybook/addon-actions'
import {Button} from '@storybook/react/demo'
import {storiesOf} from '@storybook/react'

import PointEventExample from '../src/16.4/point-events'
import PEMD from '../src/16.4/point-events.md'


storiesOf('React 16.4', module)
  .add('Point Event', () => <PointEventExample />, {info: {text: PEMD, inline: false, source: false, propTables: null}})

