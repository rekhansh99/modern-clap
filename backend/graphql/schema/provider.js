module.exports = `
type Provider {
  _id: ID!
	ownerName: String
  ownerPhone: String
  ownerPhoneVerified: Boolean
  ownerEmail: String!
  ownerEmailVerified: Boolean!
  ownerMobile: String!
  ownerMobileVerified: Boolean!
  country: String!
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
  country: String!
  password: String!
}

input UpdateProviderInput {
  ownerName: String
  ownerPhone: String
  ownerEmail: String
  ownerMobile: String
  country: String
  businesses: [UpdateBusinessInput!]
}
`;
