// import React, { useEffect } from 'react';
// import IndexedDb from './indexDB'

// const Test = () => {
//     useEffect(() => {
//         const runIndexDb = async () => {
//             const indexedDb = new IndexedDb('test');
//             await indexedDb.createObjectStore(['books', 'students']);
//             await indexedDb.putValue('books', { name: 'A Game of Thrones' });
//             await indexedDb.putBulkValue('books', [{ name: 'A Song of Fire and Ice' }, { name: 'Harry Potter and the Chamber of Secrets' }]);
//             await indexedDb.getValue('books', 1);
//             await indexedDb.getAllValue('books');
//             await indexedDb.deleteValue('books', 1);
//         }
//         runIndexDb();
//     }, []);
//     return (
//         null
//     )
// }

// export default Test;