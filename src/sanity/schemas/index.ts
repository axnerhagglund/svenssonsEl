import { faqItemSchema } from './faqItem'
import { postSchema } from './post'
import { pricingPackageSchema } from './pricingPackage'
import { serviceSchema } from './service'
import { teamMemberSchema } from './teamMember'

export const schemas = [
  postSchema,
  teamMemberSchema,
  serviceSchema,
  faqItemSchema,
  pricingPackageSchema,
]
