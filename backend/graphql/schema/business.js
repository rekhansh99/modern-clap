module.exports = `
type Business {
  _id: ID
  tradeLicenseNo: String
  tradeLicenseDate: String
  tradeLicenseDoc: String
	shopName: String!
	typeId: ID!
	type: Type!
  services: [ServiceBusiness!]!
  contactPersonName: String
  contactPersonMobile: String
  contactPersonMobileVerified: Boolean
  businessHours: BusinessHours
  city: String!
  pincode: String!
  address: String!
  state:  String!
}

type BusinessHours {
  open: Days!
  close: Days!
}

type Days {
  mon: Int
  tue: Int
  wed: Int
  thu: Int
  fri: Int
  sat: Int
  sun: Int
}

input CreateBusinessInput {
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
  state:  String!
}

input UpdateBusinessInput {
  tradeLicenseNo: String
  tradeLicenseDate: String
  tradeLicenseDoc: String
  businessCategories: [ID!]
  services: [ServiceBusinessInput!]
  businessHours: BusinessHoursInput
  shopName: String
  contactPersonName: String
  contactPersonMobile: String
  city: String
  pincode: String
  address: String
  state:  String
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

input BusinessHoursInput {
  open: DaysInput
  close: DaysInput
}

input DaysInput {
  mon: Int
  tue: Int
  wed: Int
  thu: Int
  fri: Int
  sat: Int
  sun: Int
}
`;
