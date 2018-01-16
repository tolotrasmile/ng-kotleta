import { Geo } from './geo'

export interface Address {
  city: String
  geo: Geo
  street: String
  suite: String
  zipcode: String
}
