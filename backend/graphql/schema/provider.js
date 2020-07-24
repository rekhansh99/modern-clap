module.exports = `
type Provider {
  _id: ID!
  ownerName: String
  ownerEmail: String
  ownerMobile: String
  ownerPhone: String
  country: String!
  password: String
  tradeLicenseNo: String
  tradeLicenseDate: String
  tradeLicenseDoc: String
  businessCategory: Category!
  shopName: String!
  contactPersonName: String
  contactPersonMobile: String
  city: String!
  pincode: String!
  address: String!
  area:  String!
}

input RegisterProviderInput {
  ownerName: String!
  ownerEmail: String!
  ownerMobile: String!
  ownerPhone: String
  country: String!
  password: String!
  tradeLicenseNo: String!
  tradeLicenseDate: String!
  tradeLicenseDoc: String!
  businessCategory: String!
  shopName: String!
  contactPersonName: String
  contactPersonMobile: String
  city: String!
  pincode: String!
  address: String!
  area:  String!
}

input UpdateProviderInput {
  ownerName: String
  ownerEmail: String
  ownerMobile: String
  ownerPhone: String
  country: String
  password: String!
  tradeLicenseNo: String
  tradeLicenseDate: String
  tradeLicenseDoc: String
  businessCategory: ID
  shopName: String
  contactPersonName: String
  contactPersonMobile: String
  city: String
  pincode: String
  address: String
  area:  String
}
`