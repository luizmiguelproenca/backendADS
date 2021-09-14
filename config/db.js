const mongoose = require('mongoose')
const MONGOURI = process.env.MONGODB_URL


const InicializaMongoServer = async() => {
    // console.log(MONGOURI);
    try{
        await mongoose.connect(MONGOURI, {
          useNewUrlParser: true,
          useUnifiedTopology: true  
        })
        console.log(`Conectado ao MongoDB!`)
    }catch(a){
        throw e
    }
}
module.exports = InicializaMongoServer