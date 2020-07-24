module.exports = `
type Customer {
  _id: ID!
  name: String!
  mobile: String!
  pendingRequests: [Request!]!
  completedRequests: [Request!]!
  cancelledRequests: [Request!]!
  reviews: [Review!]!
}
`;
