const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt')

const userSchema = new Schema({
    username: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    }
})

//model üzerinde yapıyorsak işlemleri statics eklememiz gerekiyormuş
userSchema.statics.login = async function (username, password) {
    const user = await this.findOne({username})
    if ( user ) {
        const auth = await bcrypt.compare(password, user.password)

        console.log(password, user.password, 'user % user.password')
        console.log(auth, 'auth nedir')
        if ( auth ) {
            return user;
        } else {

            throw Error('parola hatali')
        }
    }else {
        throw Error('kullanıcı bulunamadı')
    }

} 

userSchema.pre('save',  async function (next){
    const salt = await bcrypt.genSalt()
    console.log(this.password, salt, 'password & salt')
    this.password = await bcrypt.hash(this.password, salt)
    next()
})

const User = mongoose.model('User', userSchema)
module.exports = User