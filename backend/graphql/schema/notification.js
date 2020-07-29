module.exports = `
type Notification {
  type: String
  requestId: ID
  message: String
  seen: Boolean
}

type Notifications {
  data: [Notification!]!
  count: Int!
}
`;