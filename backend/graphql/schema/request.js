module.exports = `
type Request {
  _id: ID!
  services: [ServiceRequest!]!
  time: String!
  location: Location!
  payment: Payment!
  status: String!
  review: Review
}

type ServiceRequest {
  service: Service!
  staffsAssigned: [Staff!]
}

type Location {
  flatNo: String!
  buinding: String!
  area: String!
  landmark: String
  addressType: String!
}

type Payment {
  mode: String!
  subtotal: Float!
  vat: Float!
  discount: Float!
  total: Float!
  status: String!
}

input RequestInput {
  services: [ServiceRequest!]!
  time: String!
  location: Location!
  Payment Payment!
}

input UpdateRequestInput {
  services: [ServiceRequest!]
  time: String
  review: Review
}
`