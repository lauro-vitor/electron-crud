const getConnection = require('../connectionFactory');

const getUserById = async id => {
    try {
        return await getByid(id);
    } catch (error) {
        return error;
    }
}

const getByid = id => {

    return new Promise((resolve, reject) => {

        const connection = getConnection();

        const sql = 'SELECT * FROM Users WHERE id = ?';

        connection.connect();

        connection.query(sql, id, (error, results) => {
            
            if(error) {
                return reject(error);
            }

            if(results.length > 0) {
                resolve(results[0]);
                return;
            }
            
            resolve(null);

        });

        connection.end();
    });
}


module.exports = getUserById;