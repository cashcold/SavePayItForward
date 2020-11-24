const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    user_Name: {
        type: String,
        require: true,
    },
    plan: {
        type: String,
        require: true, 
    },
    withdrawtAmount: {
        type: String,
        require: true,
    },
    walletAddress: {
        type: String
    }
    
})

const WithdrawDeposit = mongoose.model('WithdrawDeposit', userSchema)

module.exports = WithdrawDeposit;