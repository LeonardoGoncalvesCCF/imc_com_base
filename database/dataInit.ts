import { DatabaseConnection } from '../database/database'

var db = null
export default class DatabaseInit {

    constructor() {
        db = DatabaseConnection.getConnection()
        db.exec([{ sql: 'PRAGMA foreign_keys = ON;', args: [] }], false, () =>
        console.log('Foreign keys turned on')
    );
        this.InitDb()
    }
    private InitDb() {
        var sql = [
            `DROP TABLE IF EXISTS imc;`,
            
            `create table if not exists imc (
            id integer primary key autoincrement,
            valorImc integer,
         
            );`,
                        
            `insert into imc (valorImc) values('');`,
            
        ];

        db.transaction(
            tx => {
                for (var i = 0; i < sql.length; i++) {
                    console.log("execute sql : " + sql[i]);
                    tx.executeSql(sql[i]);
                }
            }, (error) => {
                console.log("error call back : " + JSON.stringify(error));
                console.log(error);
            }, () => {
                console.log("transaction complete call back ");
            }
        );
    }

}