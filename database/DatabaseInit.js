import DataManager from './DataManager';
import db from './DatabaseInstace';
export default class DatabaseInit {

    imcDados = [
        {
            imcValor: '35',
        },
        
    ];

    constructor() {
        this.initDb();
    }

    initDb() {
        const sql = [
            DataManager.createTableImc(),
            DataManager.createImcValor(this.imcValor[0]),
        ];
        db.transaction(tx => {
            sql.forEach(query => {
                tx.executeSql(query);
            });
        });
    }
}