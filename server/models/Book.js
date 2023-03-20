const { ServerDescription } = require('mongodb')
const mongoose = require('mongoose')

const BookSchema = new mongoose.Schema({
    title:{
        type: String,
    require: true
    },
    isbn:{
        type: String,
        require: true
    },
    author:{
        type: String,
        require: true
    },
    description:{
        type: String
    },
    publisher:
    {
        type: String,
    },
    update_date:
    {
        type: Date,
    default: Date.now  
  }
    
})
module.exports = Book = mongoose.model('Book',BookSchema);