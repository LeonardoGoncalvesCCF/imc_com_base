import db from './DatabaseInstace';

//QUERIES

const sqlCreate = 'CREATE TABLE IF NOT EXISTS IMC (id INTEGER PRIMARY KEY AUTOINCREMENT, imc REAL (4))';

//CREATE
const sqlInsert = 'INSERT INTO IMC (imcValor) VALUES (?)';
//READ
const sqlSelect = 'SELECT * FROM USER WHERE id = ?';
//UPDATE
const sqlUpdate = 'UPDATE IMC SET imcValor = ?, WHERE id = ?';
//DELETE
const sqlDelete = 'DELETE FROM IMC WHERE id = ?';


//CLASSE
export default class DataManager {
    //MÉTODOS DA CLASSE
    static async createTableImc() {
        (await db).transaction(tx => {
            tx.executeSql(sqlCreate);
        });
    }

    static async openDatabase() {
        return await db;
    }

    static async createTableImc(user) {
        (await db).transaction(tx => {
            tx.executeSql(sqlInsert, [imc.imcvalor]);
        });
    }

    static async getImc(id) {
        let user = null;
        (await db).transaction(tx => {
            tx.executeSql(sqlSelect, [id], (_, { rows }) => {
                user = rows._array[0];
            });
        });
        return user;
    }

    static async deleteImc(id) {
        (await db).transaction(tx => {
            tx.executeSql(sqlDelete, [id]);
        });
    }

    static async updateImc(user) {
        (await db).transaction(tx => {
            tx.executeSql(sqlUpdate, [imc.imcvalor]);
        });
    }
}



