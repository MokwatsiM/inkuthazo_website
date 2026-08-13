import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {structure} from './structure'

/** Document types held at a fixed id and surfaced as a single Studio entry. */
const SINGLETONS = ['siteSettings', 'aboutSection', 'membershipSettings']

export default defineConfig({
  name: 'default',
  title: 'Inkuthazo Website',

  projectId: '8mvbistk',
  dataset: 'production',

  plugins: [structureTool({structure}), visionTool()],

  schema: {
    types: schemaTypes,
  },

  document: {
    // Singletons are edited in place at a fixed id, so they must not be
    // duplicated or deleted from the Studio.
    actions: (prev, {schemaType}) =>
      SINGLETONS.includes(schemaType)
        ? prev.filter(({action}) => action !== 'duplicate' && action !== 'delete')
        : prev,
  },
})
