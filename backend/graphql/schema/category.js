module.exports = `
type Category {
  _id: ID!
  name: String!
  services: [Service!]!
}

input CategoryInput {
  name: String!
}
`;
