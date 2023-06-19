const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/shopApp')
    .then(()=>{
        console.log('Connection Open');
    })
    .catch(err=>{
        console.log("ERROR!!");
        console.log(err);
    })

const productSchema = new mongoose.Schema({
    name :{ 
        type:String,
        required:true,
        maxlength:20
    },
    price:{
        type:Number,
        min:0,
        required:true
    },
    onsale :{
        type:Boolean,
        default:false
    },
    categories:{
        type:[String],
        default:['cycling']
    },
    qty:{
        online:{
            type : Number,
            default:0
        },
        inStore:{
            type:Number,
            default:0
        }
    }
})
const Product = mongoose.model('Product',productSchema);
// const bike = new Product({name:'Tire Pump',price:19.50,categories:['Cycling']})
// bike.save()
    // .then(data=>{
    //     console.log('It Worked')
    //     console.log(data)
    // })
    // .catch(err=>{
    //     console.log('ERRor')
    // })
Product.findOneAndUpdate({name:'Tire Pump'},{price:-19.99},{new:true,runValidators:true})
    .then(data=>{
        console.log('It Worked')
        console.log(data)
    })
    .catch(err=>{
        console.log(err)
    })