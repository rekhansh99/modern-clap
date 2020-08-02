module.exports = `
type Business {
  _id: ID
	ownerName: String
  ownerPhone: String
  country: String!
  tradeLicenseNo: String
  tradeLicenseDate: String
  tradeLicenseDoc: String
	shopName: String!
	typeId: ID!
	type: Type!
  services: [ServiceBusiness!]!
  contactPersonName: String
  contactPersonMobile: String
  city: String!
  pincode: String!
  address: String!
  area:  String!
}

input CreateBusinessInput {
	ownerName: String!
  ownerPhone: String
  country: String!
  tradeLicenseNo: String!
  tradeLicenseDate: String!
  tradeLicenseDoc: String!
	shopName: String!
	type: ID!
  contactPersonName: String
  contactPersonMobile: String
  city: String!
  pincode: String!
  address: String!
  area:  String!
}

input UpdateBusinessInput {
	ownerName: String
  ownerPhone: String
  country: String
  tradeLicenseNo: String
  tradeLicenseDate: String
  tradeLicenseDoc: String
  businessCategories: [ID!]
  services: [ServiceBusinessInput!]
  shopName: String
  contactPersonName: String
  contactPersonMobile: String
  city: String
  pincode: String
  address: String
  area:  String
}

type ServiceBusiness {
  service: Service!
  serviceId: ID!
  cutPrice: Float!
  salePrice: Float!
  active: Boolean!
}

input ServiceBusinessInput {
  service: ID!
  cutPrice: Float!
  salePrice: Float!
  active: Boolean!
}
`;
