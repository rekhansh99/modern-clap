const Staff = require('../../../models/staff');
const { reviews } = require('./review');

exports.transformStaff = staff => {
  return {
    ...staff._doc,
    _id: staff.id,
    reviews: () => reviews(staff.reviews)
  };
};

exports.staff = async staffId => {
  const staff = await Staff.findById(staffId);
  return this.transformStaff(staff);
};

exports.staffs = async staffIds => {
  const staffs = await Staff.find({ _id: { $in: staffIds } });
  return staffs.map(staff => {
    return this.transformStaff(staff);
  });
};
