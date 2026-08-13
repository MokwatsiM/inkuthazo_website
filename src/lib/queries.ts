/**
 * GROQ queries for published content.
 *
 * Plain template strings: `defineQuery` is a TypeGen marker from `groq` /
 * `next-sanity`, neither of which this Vite app uses. If TypeGen is added
 * later, swap these to `defineQuery` and the generated types will follow.
 */

export const SITE_SETTINGS_QUERY = `*[_type == "siteSettings"][0]{
  heroImage{
    alt,
    hotspot,
    crop,
    asset->{
      _id,
      url,
      metadata{ lqip, dimensions{ width, height, aspectRatio } }
    }
  }
}`

export const ABOUT_QUERY = `*[_type == "aboutSection"][0]{
  eyebrow,
  heading,
  story,
  highlights[]{ title, description, icon }
}`

export const GATHERINGS_QUERY = `*[_type == "gathering"] | order(order asc){ _id, title, dateLabel, time, audience }`

export const FAQS_QUERY = `*[_type == "faq"] | order(order asc){ _id, question, answer }`

export const MEMBERSHIP_QUERY = `*[_type == "membershipSettings"][0]{
  joiningFee,
  joiningFeeNote,
  monthlyContribution,
  monthlyContributionNote,
  dependantLimit,
  memberPayout,
  dependantPayout,
  waitingPeriodMonths,
  valueSummary,
  benefits[]{ title, description, icon },
  waitingPeriodHeading,
  waitingPeriodBody,
  smallPrint
}`
