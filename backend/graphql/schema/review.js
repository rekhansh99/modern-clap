module.exports = `
type Review {
  _id: ID!
  request: Request!
  toolsRating: Int!
  workRating: Int!
  behaviourRating: Int!
  overallRating: Int!
  message: String
}

input ReviewInput {
  request: ID!
  toolsRating: Int!
  workRating: Int!
  behaviourRating: Int!
  overallRating: Int!
  message: String
}
`;
