import { Address } from './address'
import { Company } from './company'

export interface User {

  address: Address
  company: Company
  id: Number
  name: String
  username: String
  phone: String
  website: String

}
