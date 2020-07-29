module.exports = `
type Category {
  _id: ID!
  name: String!
  icon: String
  typeId: ID!
  type: Type!
  serviceIds: [ID!]!,
  services: [Service!]!
  providerIds: [ID!]!
  providers: [Provider!]!
}

input CategoryInput {
  name: String!
  icon: String
  type: ID!
}
`;
