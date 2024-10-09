
const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const newsSchema=new Schema({
    title :{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    details:{
        type:String,
        required:true
    },
    infornation:{
        type:String,
    },
      imageUrl: {
        type: String,
        trim: true,
        default: '',
      }
})

const News = mongoose.model('News', newsSchema);

module.exports = News;