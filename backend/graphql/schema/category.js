module.exports = `
type Category {
  _id: ID!
  name: String!
  serviceIds: [ID!]!,
  services: [Service!]!
}

input CategoryInput {
  name: String!
}
`;
