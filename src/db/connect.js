import {MongoClient} from 'mongodb'
import getMongoId from './getMongoId'

let globalDB = null

export const getCollection = function (name) {
  const collection = globalDB.collection(name)
  const defaultInsert = collection.insert.bind(collection)
  collection.insert = async function (data) {
    const _id = getMongoId()
    await defaultInsert({
      _id,
      ...data
    })
    return _id
  }
  return collection
}

export default async function () {
  return new Promise(function (resolve, reject) {
    const url = process.env.MONGO_URL || 'no url'
    console.log('Connecting to mongo...', url.substr(0, 20))
    MongoClient.connect(process.env.MONGO_URL, function (error, db) {
      if (error) {
        reject(error)
      } else {
        globalDB = db
        resolve(db)
      }
    })
  })
}
