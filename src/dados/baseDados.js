import Dexie from 'dexie'

const db = new Dexie('dbGeral');

db.version(1).stores({
    pessoas: `++id, nome, idade`
});

export default db;