const contactsOperations = require("../../models/contacts");

const getContactById = async (req, res) => {
  const { contactId } = req.params;
  const result = await contactsOperations.getContactById(contactId);
  if (!result) {
    const error = new Error("Not found");
    error.status = 404;
    throw error;
  }
  res.json({
    status: "success",
    code: 200,
    data: {
      result,
    },
  });
};

module.exports = getContactById;
