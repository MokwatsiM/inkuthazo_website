import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import { inlineSvgInput } from '@focus-reactive/sanity-plugin-inline-svg-input'




export default defineConfig({
  name: 'default',
  title: 'inkuthazo-burial',

  projectId: 'hz2d2ddg',
  dataset: 'production',
   useCdn: true,

  plugins: [structureTool(), visionTool(),inlineSvgInput()],

  schema: {
    types: schemaTypes,
  },
})
