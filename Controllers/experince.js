const Model = require("../Models/experience");
const form = require("../Helpers//resForm");

module.exports = {
  getExperience : (req, res) => {
    Model.getExperience()
      .then(status1 => form.getExperience(res, status1, 200))
      .catch(error => console.log(error));
  }
// };
// getExperience : (req,res) =>{
//   Model.getExperience() 
//   .then(status1 => form.getExperience(res,status1,200))//langsung diubah ke JSON
//   .catch(error => console.log(error))
// }
}


