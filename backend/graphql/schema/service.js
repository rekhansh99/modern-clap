module.exports = `
type Service {
  _id: ID!
  name: String!
  categoryId: ID!
  category: Category!
  faqs: [FAQ!]!
  providerId: ID!
  providers: [Provider!]!
}

type FAQ {
  question: String!
  answer: String!
}

input ServiceInput {
  name: String!
  category: String!
  faqs: [FAQInput!]
  providers: [ID!]
}

input FAQInput {
  question: String!
  answer: String!
}
`;
