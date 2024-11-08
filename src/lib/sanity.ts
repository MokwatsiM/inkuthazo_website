import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: 'hz2d2ddg',
  dataset: process.env.DATASETS_ENV,
  useCdn: true,
  apiVersion: '2022-03-07',
})
export const builder = imageUrlBuilder(client)
export const urlFor = (source: any) => builder.image(source).auto('format')
    .fit('crop')
    .quality(80);

