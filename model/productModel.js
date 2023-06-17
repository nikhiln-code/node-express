const mongoose = require('mongoose');

const productSchemes = mongoose.Schema(
    {
        name:{
            type: String,
            required:[true, "Please enter product name"]
        },
        quantity:{
            type: Number,
            required:true,
            default:1
        },
        price:{
            type: Number,
            required: true
        },
        image:{
            type: String,
            required: false
        }
    }
);

const Product = mongoose.model('Product', productSchemes);
module.exports = Product;