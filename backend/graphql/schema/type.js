module.exports = `
	type Type {
    _id: ID!
		name: String!
		icon: String
		categoryIds: [ID!]!
		categories: [Category!]!
	}

	input TypeInput {
		name: String!
		icon: String
	}
`;
