const Model = require("../Models/history");
const form = require("../Helpers/resForm");


module.exports = {
  getHistory: (req, res) => {
  
    Model.getHistory()
      .then(results => form.getHistory(res, results, 200))
      .catch(error => console.log(error));
  },
  postHistory: (req, res) => {
    //  const bodyReq = req.body;
    var date = new Date();
    const body = {
      ...req.body,
      transaction_at: date
    };
    // console.log(body)
    Model.postHistory(body)
      .then(results => form.postHistory(res, results, 200))
      .catch(error => console.log(error));
  }
};
