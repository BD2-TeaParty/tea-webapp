const oracledb = require('oracledb');
const { username, password, address } = require('./oracleSecret');


export async function oraclexddd() {

    let connection;
  
    try {
      connection = await oracledb.getConnection({
            user          : username,
            password      : password,
            connectString : address,  // ???
        });
  
      const result = await connection.execute(
        `SELECT * FROM ZAMOWIENIA`,
        [103],  // bind value for :id
      );
      console.log(result.rows);
  
    } catch (err) {
      console.error(err);
    } finally {
      if (connection) {
        try {
          await connection.close();
        } catch (err) {
          console.error(err);
        }
      }
    }
  }