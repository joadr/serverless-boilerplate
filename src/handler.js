import './loadAWSConfig'
import connect from './db/connect'
import 'request'
import sayHello from './sayHello'

const run = function (func) {
  return function (event, context, callback) {
    console.log('running microservice')
    connect().then(db => {
      console.log('connected to db')
      func(event)
      .then(result => {
        console.log('job ran')
        callback(null, result)
        db.close()
      })
      .catch(error => {
        db.close()
        console.error(error)
        callback(error)
      })
    }).catch(error => {
      console.error('mongo error', error)
      callback(error)
    })
  }
}

// const sayHello = run(sayHelloF)

export {
  sayHello
}
