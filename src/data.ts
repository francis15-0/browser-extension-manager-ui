// src/data/extensions.ts
// Adjust the import paths depending on where this file lives
import devLensLogo from '../src/assets/images/logo-devlens.svg'
import styleSpyLogo from '../src/assets/images/logo-style-spy.svg'
import speedBoostLogo from '../src/assets/images/logo-speed-boost.svg'
import jsonWizardLogo from '../src/assets/images/logo-json-wizard.svg'
import tabMasterProLogo from '../src/assets/images/logo-tab-master-pro.svg'
import viewportBuddyLogo from '../src/assets/images/logo-viewport-buddy.svg'
import markupNotesLogo from '../src/assets/images/logo-markup-notes.svg'
import gridGuidesLogo from '../src/assets/images/logo-grid-guides.svg'
import palettePickerLogo from '../src/assets/images/logo-palette-picker.svg'
import linkCheckerLogo from '../src/assets/images/logo-link-checker.svg'
import domSnapshotLogo from '../src/assets/images/logo-dom-snapshot.svg'
import consolePlusLogo from '../src/assets/images/logo-console-plus.svg'


export const data = [
  {
    logo: devLensLogo,
    name: 'DevLens',
    description: 'Quickly inspect page layouts and visualize element boundaries.',
    isActive: true,
  },
  {
    logo: styleSpyLogo,
    name: 'StyleSpy',
    description: 'Instantly analyze and copy CSS from any webpage element.',
    isActive: true,
  },
  {
    logo: speedBoostLogo,
    name: 'SpeedBoost',
    description: 'Optimizes browser resource usage to accelerate page loading.',
    isActive: false,
  },
  {
    logo: jsonWizardLogo,
    name: 'JSONWizard',
    description: 'Formats, validates, and prettifies JSON responses in-browser.',
    isActive: true,
  },
  {
    logo: tabMasterProLogo,
    name: 'TabMaster Pro',
    description: 'Organizes browser tabs into groups and sessions.',
    isActive: true,
  },
  {
    logo: viewportBuddyLogo,
    name: 'ViewportBuddy',
    description: 'Simulates various screen resolutions directly within the browser.',
    isActive: false,
  },
  {
    logo: markupNotesLogo,
    name: 'Markup Notes',
    description:
      'Enables annotation and notes directly onto webpages for collaborative debugging.',
    isActive: true,
  },
  {
    logo: gridGuidesLogo,
    name: 'GridGuides',
    description: 'Overlay customizable grids and alignment guides on any webpage.',
    isActive: false,
  },
  {
    logo: palettePickerLogo,
    name: 'Palette Picker',
    description: 'Instantly extracts color palettes from any webpage.',
    isActive: true,
  },
  {
    logo: linkCheckerLogo,
    name: 'LinkChecker',
    description: 'Scans and highlights broken links on any page.',
    isActive: true,
  },
  {
    logo: domSnapshotLogo,
    name: 'DOM Snapshot',
    description: 'Capture and export DOM structures quickly.',
    isActive: false,
  },
  {
    logo: consolePlusLogo,
    name: 'ConsolePlus',
    description: 'Enhanced developer console with advanced filtering and logging.',
    isActive: true,
  },
]
