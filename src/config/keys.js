if(process.env.NODE_ENV==='production'){
    console.log('yyyy')
    module.exports = require('./prod')
}else{
    module.exports = require('./dev')

}