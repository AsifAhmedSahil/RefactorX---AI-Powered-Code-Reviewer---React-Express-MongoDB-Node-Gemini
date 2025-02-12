const aiService = require("../services/ai.service");

module.exports.getResponse = async (req, res) => {
  const promt = req.query.promt;

  if (!promt) {
    return res.status(400).send("promt is required!");
  }

  const response = aiService(promt);

  res.send(response);
};
