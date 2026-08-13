import type {StructureResolver} from 'sanity/structure'

/**
 * Membership terms is a singleton — one document at a fixed id — so it is
 * pinned as a single entry rather than a list you can add to.
 */
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Site settings')
        .id('siteSettings')
        .child(
          S.document()
            .schemaType('siteSettings')
            .documentId('siteSettings')
            .title('Site settings'),
        ),
      S.listItem()
        .title('About section')
        .id('aboutSection')
        .child(
          S.document()
            .schemaType('aboutSection')
            .documentId('aboutSection')
            .title('About section'),
        ),
      S.listItem()
        .title('Membership terms')
        .id('membershipSettings')
        .child(
          S.document()
            .schemaType('membershipSettings')
            .documentId('membershipSettings')
            .title('Membership terms'),
        ),
      S.divider(),
      S.documentTypeListItem('gathering').title('Gatherings'),
      S.documentTypeListItem('faq').title('Questions'),
    ])
