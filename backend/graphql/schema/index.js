const { buildSchema } = require('graphql');

module.exports = buildSchema(`
type Category {
  _id: ID!
  name: String!
  services: [Service!]!
}

type Service {
  _id: ID!
  name: String!
  category: Category!
  faqs: [FAQ!]!
  providers: [Provider!]!
}

type FAQ {
  question: String!
  answer: String!
}

type Provider {
  _id: ID!
  ownerName: String!
  ownerEmail: String!
  ownerMobile: String!
  ownerPhone: String
  country: String!
  password: String!
  tradeLicenseNo: String!
  tradeLicenseDate: String!
  tradeLicenseDoc: String!
  businessCategory: Category!
  shopName: String!
  contactPersonName: String
  contactPersonMobile: String
  city: String!
  POBox: String!
  address: String!
  area:  String!
}

type ServiceRequest {
  service: Service!
  staffsAssigned: [Staff!]!
  review: Review
}

type Request {
  _id: ID!
  service: [ServiceRequest!]!
  time: String!
  location: Location!
  payment: Payment!
  status: String!
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

type Staff {
  _id: ID!
  firstName: String!
  lastName: String!
  mobile: String!
  profession: String!
  permissions: Permissions!
  email: String!
  password: String!
  certificaties: [String!]!
  businessCategories: [String!]!
}

type Permissions {
  dashboard: String!
  notification: String!
  inbox: String!
  requests: String!
  acceptedRequests: String!
  service:  String!
  staff: String!
  sale: String!
  review: String!
  settings: String!
}

type Customer {
  _id: ID!
  name: String!
  mobile: String!
  pendingRequests: [Request!]!
  completedRequests: [Request!]!
  cancelledRequests: [Request!]!
  reviews: [Review!]
}

type Review {
  _id: ID!
  request: Request!
  customer: Customer!
  provider: Provider!
  toolsRating: Int!
  workRating: Int!
  behaviourRating: Int!
  overallRating: Int!
  message: String
}

input CategoryInput {
  name: String!
  services: [ID!]
}

type RootQuery {
  categories: [Category!]!
  providers: [Provider!]!
  services(category: CategoryInput!): [Service!]!
}

type RootMutation {
  createCategory(category: CategoryInput!): Category!
}

schema {
  query: RootQuery
  mutation: RootMutation
}
`);