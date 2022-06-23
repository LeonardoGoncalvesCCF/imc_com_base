//impotação da biblioteca do sqlite para o expo
import * as SQLite from 'expo-sqlite';
//importação da biblioteca do sqlite para build/apk
// import {openDatabase} from 'react-native-sqlite-storage';

let db = SQLite.openDatabase({name: 'ImcDatabase.db'});

export default db;
