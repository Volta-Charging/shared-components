import { injectGlobal } from 'styled-components'

import MalloryMP_Book from './assets/fonts/MalloryMP/MalloryMP-Book.otf'
import MalloryMP_BookItalic from './assets/fonts/MalloryMP/MalloryMP-BookItalic.otf'
import MalloryMP_Light from './assets/fonts/MalloryMP/MalloryMP-Light.otf'
import MalloryMP_Medium from './assets/fonts/MalloryMP/MalloryMP-Medium.otf'
import MalloryMP_MediumItalic from './assets/fonts/MalloryMP/MalloryMP-MediumItalic.otf'

export const loadFonts = () => {

  return injectGlobal`
    @font-face {
      font-family: MalloryMP-Book;
      src: url('${MalloryMP_Book}');
    }

    @font-face {
      font-family: MalloryMP-BookItalic;
      src: url('${MalloryMP_BookItalic}');
    }

    @font-face {
      font-family: MalloryMP-Light;
      src: url('${MalloryMP_Light}');
    }

    @font-face {
      font-family: MalloryMP-Medium;
      src: url('${MalloryMP_Medium}');
    }

    @font-face {
      font-family: MalloryMP-MediumItalic;
      src: url('${MalloryMP_MediumItalic}');
    }
  `
}

export const FONT_FAMILY = {
  MALLORYMP_BOOK: 'MalloryMP-Book, Heveltica, Arial, sans-serif',
  MALLORYMP_BOOKITALIC: 'MalloryMP-BookItalic, Helvetica, Arial, sans-serif',
  MALLORYMP_LIGHT: 'MalloryMP_Light, Helvetica, Arial, sans-serif',
  MALLORYMP_MEDIUM: 'MalloryMP-Medium, Helvetica, Arial, sans-serif',
  MALLORYMP_MEDIUMITALIC: 'MalloryMP_MediumItalic, Helvetica, Arial, sans-serif',
}
