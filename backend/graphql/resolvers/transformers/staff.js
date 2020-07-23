const Staff = require("../../../models/staff");
const Staff = require("../../../models/staff");
const { reviews } = require("./review");

exports.transformStaff = (staff) => {
  return {
    ...staff._doc,
    _id: staff.id,
    reviews: () => reviews(staff.reviews),
  };
};

exports.staff = async (staffId) => {
  try {
    const staff = await Staff.findById(staffId);
    return this.transformStaff(staff);
  } catch (err) {
    throw err;
  }
};

exports.staffs = async (staffIds) => {
  try {
    const staffs = await Staff.find({ _id: { $in: staffIds } });
    return staffs.map((staff) => {
      return this.transformStaff(staff);
    });
  } catch (err) {
    throw err;
  }
};
