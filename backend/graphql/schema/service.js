module.exports = `
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

input ServiceInput {
  name: String!
  category: ID!
  faqs: [FAQ!]
  providers: [Provider!]
}
`