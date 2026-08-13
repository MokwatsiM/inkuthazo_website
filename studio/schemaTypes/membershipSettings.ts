import {defineArrayMember, defineField, defineType} from 'sanity'

/**
 * Singleton: there is only ever one set of membership terms.
 * Held at the fixed id `membershipSettings` and surfaced as a single
 * Studio entry rather than a creatable list.
 */
export const membershipSettings = defineType({
  name: 'membershipSettings',
  title: 'Membership terms',
  type: 'document',
  groups: [
    {name: 'costs', title: 'Costs', default: true},
    {name: 'benefits', title: 'Benefits'},
    {name: 'waiting', title: 'Waiting period'},
  ],
  fields: [
    defineField({
      name: 'joiningFee',
      title: 'Joining fee',
      type: 'string',
      group: 'costs',
      initialValue: 'R550',
      description: 'Written as it should appear, including the R.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'joiningFeeNote',
      title: 'Joining fee note',
      type: 'string',
      group: 'costs',
      initialValue: 'Once-off, payable when your application is accepted.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'monthlyContribution',
      title: 'Monthly contribution',
      type: 'string',
      group: 'costs',
      initialValue: 'R200',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'monthlyContributionNote',
      title: 'Monthly contribution note',
      type: 'string',
      group: 'costs',
      initialValue: 'Covers you and up to 3 registered dependants.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'dependantLimit',
      title: 'Dependants covered',
      type: 'number',
      group: 'costs',
      initialValue: 3,
      description: 'How many dependants the monthly contribution covers. Used across the site.',
      validation: (rule) => rule.required().integer().min(0),
    }),
    defineField({
      name: 'memberPayout',
      title: 'Member funeral benefit',
      type: 'string',
      group: 'benefits',
      initialValue: 'R7 000',
      description: 'Shown in the hero and quoted elsewhere. Written as it should appear.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'dependantPayout',
      title: 'Dependant funeral benefit',
      type: 'string',
      group: 'benefits',
      initialValue: 'R5 000',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'waitingPeriodMonths',
      title: 'Waiting period (months)',
      type: 'number',
      group: 'waiting',
      initialValue: 6,
      description: 'Used where the waiting period is mentioned outside this section.',
      validation: (rule) => rule.required().integer().min(0),
    }),
    defineField({
      name: 'valueSummary',
      title: 'Value summary',
      type: 'text',
      rows: 2,
      group: 'costs',
      initialValue:
        'R2 400 a year, towards up to R22 000 of funeral benefit for a household of four.',
      description: 'Shown beside the section heading. Keep the arithmetic correct if fees change.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'benefits',
      title: 'What members get',
      type: 'array',
      group: 'benefits',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'benefit',
          fields: [
            defineField({
              name: 'title',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'description',
              type: 'text',
              rows: 3,
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'icon',
              title: 'Icon',
              type: 'string',
              description: 'Which icon to show beside this benefit.',
              options: {
                list: [
                  {title: 'Funeral benefit (clasped hands)', value: 'HeartHandshake'},
                  {title: 'Household (people)', value: 'Users'},
                  {title: 'Shared assets (building)', value: 'Building2'},
                  {title: 'Beyond a payout (note)', value: 'Banknote'},
                ],
              },
              initialValue: 'HeartHandshake',
              validation: (rule) => rule.required(),
            }),
          ],
          preview: {select: {title: 'title', subtitle: 'description'}},
        }),
      ],
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: 'waitingPeriodHeading',
      title: 'Waiting period heading',
      type: 'string',
      group: 'waiting',
      initialValue: 'Your funeral benefit starts after 6 months',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'waitingPeriodBody',
      title: 'Waiting period explanation',
      type: 'text',
      rows: 4,
      group: 'waiting',
      initialValue:
        'This protects the members already contributing, so no one joins only when a benefit is needed. It also means Inkuthazo cannot help with a funeral in your first six months — please join before you need us.',
      description:
        'Say why the waiting period exists, not just that it does. An unexplained delay reads as a catch.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'smallPrint',
      title: 'Small print',
      type: 'text',
      rows: 3,
      group: 'waiting',
      initialValue:
        'Benefit amounts and contributions are set by the club and may be reviewed by members at a general meeting. Speak to a committee member for the current rules and what is required to register a dependant.',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    prepare: () => ({title: 'Membership terms'}),
  },
})
