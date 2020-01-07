const db = require("../Configs/db");

module.exports = {
  register: (data, callBack) => {
    db.query(
      `INSERT INTO user(username,email,password)values (?,?,?)`,
      [data.username, data.email, data.password, data.address],
      (error, results) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getUsers: callBack => {
    db.query(
      `select id_user,name,email,password,address from user`,
      [],
      (error, results) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },

  getUserById: (id, callBack) => {
    db.query(
      `select id,username,email,password,level from user where id = ?`,
      [id],
      (error, results) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  updateUser: (data, callBack) => {
    db.query(
      `UPDATE user set username=?, email=?, password=?, level=? where id =?`,
      [data.name, data.email, data.password, data.level, data.id],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  deleteUser: (data, callBack) => {
    db.query(`delete from user where id = ?`)[data.id],
      (error, results) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results[0]);
      };
  },
  getUserbyEmail: (email, callBack) => {
    db.query(
      `select * from user where email = ?`,
      [email],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  }
};
