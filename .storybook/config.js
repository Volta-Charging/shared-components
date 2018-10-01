import { configure } from '@storybook/react'

import { loadFonts } from '../src/Fonts'
loadFonts()

function loadStories() {
  require('../stories/index.js')
}

configure(loadStories, module)
