export default async function (time) {
  return new Promise(function (resolve) {
    return setTimeout(resolve, time)
  })
}
