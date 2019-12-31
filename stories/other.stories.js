import React from 'react'
import {storiesOf} from '@storybook/react'

import RenderPropsContainer from '../src/other/render-props'
import RPMD from '../src/other/render-props.md'

storiesOf('其他', module)
  .add('render props', () => <RenderPropsContainer />, {info: {text: RPMD, inline: true, source: false, propTables: null}})

