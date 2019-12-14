import React from 'react'
import {action} from '@storybook/addon-actions'
import {Button} from '@storybook/react/demo'
import {storiesOf} from '@storybook/react'

import ErrorBoundaryExample from '../src/16.0/error-boundaries'
import EBMD from '../src/16.0/error-boundaries.md'

import PortalExample from '../src/16.0/portal'
import CPMD from  '../src/16.0/portal.md'


storiesOf('React 16.0', module)
  .add('Error Boundaries', () => <ErrorBoundaryExample />, {info: {text: EBMD, inline: false, source: false, propTables: null}})
  .add('Portal', () => <PortalExample />, {info: {text: CPMD, inline: false, source: false, propTables: null}})
