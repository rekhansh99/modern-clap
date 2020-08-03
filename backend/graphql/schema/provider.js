module.exports = `
type Provider {
  _id: ID!
	ownerName: String
  ownerPhone: String
  ownerEmail: String!
  ownerMobile: String!
  businessIds: [ID!]!
  businesses: [Business!]!
  createdAt: String
  updatedAt: String
}

input RegisterProviderInput {
  ownerName: String!
  ownerPhone: String!
  ownerEmail: String!
  ownerMobile: String!
  password: String!
}

input UpdateProviderInput {
  ownerName: String
  ownerPhone: String
  ownerEmail: String
  ownerMobile: String
  password: String
  businesses: [UpdateBusinessInput!]
}
`;
