import PouchDB from 'pouchdb-core';
import HttpPouch from 'pouchdb-adapter-http';
import replication from 'pouchdb-replication';
import mapreduce from 'pouchdb-mapreduce';
import sqliteAdapter from 'pouchdb-adapter-react-native-sqlite';

export const pouchDb =  PouchDB.plugin(HttpPouch)
  .plugin(replication)
  .plugin(mapreduce)
  .plugin(sqliteAdapter);


export const MY_TEST_DB = new PouchDB('testDb', {
  adapter: 'react-native-sqlite',
});
