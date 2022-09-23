


// const request = indexedDB.open('history',1);
// request.onerror = function (event) {
//     console.error('An error occurred');
//     console.log(event);
// }

// request.onupgradeneeded = function () {
//     const db = request.result;
//     const store = db.createObjectStore("user", { keyPath: "id" });
//     store.createIndex("user1", ['username'], { unique: false});
//     store.createIndex("user2", ['user'], {
//         unique:false,
//     });
// }

// request.onsuccess = function () {
//     const db = request.result;
//     const transaction = db.transaction("user", "readwrite");

//     const store = transaction.objectStore('users');
//     const colorIndex = store.index('user1');

//     store.put({id: 1, user: "cleo"});
//     store.put({id: 2, user: "dan"});
    
//     const idQuery = store.get(1);

//     idQuery.onsuccess = function() {
//         console.log('idQuery', idQuery.result);
//     };

//     transaction.oncomplete = function() {
//         db.close();
//     };

// }






// import { IDBPDatabase, openDB } from 'idb';

// class IndexedDb {
//     private database: string;
//     private db: any;

//     constructor(database: string) {
//         this.database = database;
//     }

//     public async createObjectStore(tableNames: string[]) {
//         try {
//             this.db = await openDB(this.database, 1, {
//                 upgrade(db: IDBPDatabase) {
//                     for (const tableName of tableNames) {
//                         if (db.objectStoreNames.contains(tableName)) {
//                             continue;
//                         }
//                         db.createObjectStore(tableName, { autoIncrement: true, keyPath: 'id' });
//                     }
//                 },
//             });
//         } catch (error) {
//             return false;
//         }
//     }

//     public async getValue(tableName: string, id: number) {
//         const tx = this.db.transaction(tableName, 'readonly');
//         const store = tx.objectStore(tableName);
//         const result = await store.get(id);
//         console.log('Get Data ', JSON.stringify(result));
//         return result;
//     }

//     public async getAllValue(tableName: string) {
//         const tx = this.db.transaction(tableName, 'readonly');
//         const store = tx.objectStore(tableName);
//         const result = await store.getAll();
//         console.log('Get All Data', JSON.stringify(result));
//         return result;
//     }

//     public async putValue(tableName: string, value: object) {
//         const tx = this.db.transaction(tableName, 'readwrite');
//         const store = tx.objectStore(tableName);
//         const result = await store.put(value);
//         console.log('Put Data ', JSON.stringify(result));
//         return result;
//     }

//     public async putBulkValue(tableName: string, values: object[]) {
//         const tx = this.db.transaction(tableName, 'readwrite');
//         const store = tx.objectStore(tableName);
//         for (const value of values) {
//             const result = await store.put(value);
//             console.log('Put Bulk Data ', JSON.stringify(result));
//         }
//         return this.getAllValue(tableName);
//     }

//     public async deleteValue(tableName: string, id: number) {
//         const tx = this.db.transaction(tableName, 'readwrite');
//         const store = tx.objectStore(tableName);
//         const result = await store.get(id);
//         if (!result) {
//             console.log('Id not found', id);
//             return result;
//         }
//         await store.delete(id);
//         console.log('Deleted Data', id);
//         return id;
//     }
// }

// export default IndexedDb;