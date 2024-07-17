const mongoose = require('mongoose');
const mongoURI = `mongodb+srv://hackmech007:${process.env.MONGO_PASS}@cluster0.i8yam1q.mongodb.net/`;

const connectTOMongo=()=>
{
    mongoose.connect(mongoURI)
    .then(()=>{
        console.log("Connected TO Mongo successfull");
    })
    .catch(error => {
        console.log(error);
    })
}
module.exports = connectTOMongo;