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
  building: String!
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
  services: [ID!]!
  time: String!
  flatNo: String!
  building: String!
  area: String!
  landmark: String
  addressType: String!
  mode: String!
  subtotal: Float!
  vat: Float!
  discount: Float!
  total: Float!
  customer: Customer!
  provider: Provider!
}
`;
