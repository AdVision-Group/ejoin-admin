export const asyncError = (err, callback = () => {}) => {
    console.log("Niečo sa pokazilo")
    console.log(err)
    callback(err)
}