module.exports = `
type Provider {
  _id: ID!
  ownerEmail: String!
  ownerMobile: String!
  businessIds: [ID!]!
  businesses: [Business!]!
  createdAt: String
  updatedAt: String
}

input RegisterProviderInput {
  ownerEmail: String!
  ownerMobile: String!
  password: String!
}

input UpdateProviderInput {
  ownerEmail: String
  ownerMobile: String
  password: String
  businesses: [UpdateBusinessInput!]
}
`;
