import { injectGlobal } from 'styled-components'

import MalloryMP_Book from './assets/fonts/MalloryMP/MalloryMP-Book.otf'
import MalloryMP_BookItalic from './assets/fonts/MalloryMP/MalloryMP-BookItalic.otf'
import MalloryMP_Light from './assets/fonts/MalloryMP/MalloryMP-Light.otf'
import MalloryMP_Medium from './assets/fonts/MalloryMP/MalloryMP-Medium.otf'
import MalloryMP_MediumItalic from './assets/fonts/MalloryMP/MalloryMP-MediumItalic.otf'

const BACKUP_FONTS =  'Helvetica, Arial, sans-serif'

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
  MALLORYMP_BOOK: `MalloryMP-Book, ${BACKUP_FONTS}`,
  MALLORYMP_BOOKITALIC: `MalloryMP-BookItalic, ${BACKUP_FONTS}`,
  MALLORYMP_LIGHT: `MalloryMP-Light, ${BACKUP_FONTS}`,
  MALLORYMP_MEDIUM: `MalloryMP-Medium, ${BACKUP_FONTS}`,
  MALLORYMP_MEDIUMITALIC: `MalloryMP-MediumItalic, ${BACKUP_FONTS}`,
}
