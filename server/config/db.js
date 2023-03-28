const mongoose = require("mongoose")

const db = "mongodb+srv://ipsita:f1o0ew3qI09z2jOG@cluster0.j8t4ijk.mongodb.net/books?retryWrites=true&w=majority"

const connectDB = async () => {
    try{
        mongoose.set("strictQuery" , true)
        await mongoose.connect(db, {
            useNewUrlParser: true,
        })
    }
    catch (err) {
        console.error(err.message);
        process.exit(1)
    }
}
module.exports = connectDB

// const { MongoClient } = require("mongodb")
// const Db = process.env.ATLAS_URI

// const client = new MongoClient(Db, {
//     useNewUrlParser: true,
//     // useNewUrlParserUnifiedTopology: true,
// })

// var _db 
// module.exports = {
//     connectToServer: function (callback) {
//         client.connect( function (err, db){
//             if(db) {
//                 _db = db.db("cluster0")
//                 console.log("connected atlas")
//             }

//             return callback(err)
//         })
//     },
//     getDb: function() {
//         return _db

//     }
// }
