const mongoose =  require('mongoose');
const crypto =  require('crypto')
// We using Crypto for hashing password

const userSchema = new  mongoose.Schema({
    username:{
        type:String,
        trim:true,
        required:true,
        maxlength:32,
        unique:true,
        index:true,
        lowercase:true
    },
    name:{
        type:String,
        trim:true,
        required:true,
        maxlength:32,
    },
    email:{
        type:String,
        trim:true,
        required:true,
        unique:true,
        lowercase:true
    },
    profile:{
        type:String,
        required:true
    },
    hashed_pass:{
        type:String,
        required:true

    },role:{
        type:Number,
        trim:true
    },
    photo:{
        data:Buffer,
        contentType:String
    },
    resetPasswordLink:{
        data:String,
        default:''
    }

},
{
    timestamp:true
})

userSchema.methods = {
    authenticate: function(plainText) {
        return ((plainText) === this.hashed_pass);
    },

    // encryptPassword: function(password) {
    //     if (!password) return '';
    //     try {
    //         return crypto
    //             .createHmac('sha1', this.salt)
    //             .update(password)
    //             .digest('hex');
    //     } catch (err) {
    //         return '';
    //     }
    // },

    // makeSalt: function() {
    //     return Math.round(new Date().valueOf() * Math.random()) + '';
    // }
};

module.exports = mongoose.model('User',userSchema);
