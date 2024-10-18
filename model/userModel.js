

const bcrypt = require("bcrypt")


const user =sequelize.define('User',{
    
    fullName: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    farmName: {
        type: String,
        unique: true,
        trim: true,
        required: [true, 'Enter your farm name']
    },
    
    farmLocation: {
        type: String,
        required: [true, 'Enter your city, state and country']
    },
    contactLocation: {
      email:{
        type: String,
      required: [true, 'Enter email address']
      },
      phoneNumber:{
        type: String,
        required: [true, 'Enter phone number']
      }
      
    },
    typesOfProduce: {
        type: String,
        enum: ['leafyGreens', 'strechyVegetables', 'rootVegetables', 'fruitingVegetables', 'CruciferousVegetable', 'fruitingVegetables'],
        required: [true, 'Type of produce']
    }, 

    farmSize: {
        type: String,
        enum: ['less than 2.5 acres', '2.5-7.5 acres', '7.5-12 acres', 'More than 20 acres'],
        required: [true, 'Select options']
    },
    supplyFrequency: {
        type: String,
        enum: ['twice a week', 'once a month', 'others'],
        required: [true, 'Select options']
    },
    distributionChannels: {
        type: String,
        enum: ['local market', 'wholesalers', 'Direct sales'],
        required: [true, 'Select distribution for your produce']
    },
    mainChallenges: {
        type: String,
        required: [true, 'Describe the challenge you face']
    },
    additionalOfferings: {
        type: String,
        enum: ['Organic Certification', 'Value Added Products', 'Farm tours or Educational program', 'Packaging Services'],
        required: [true, 'Type of produce']
    },
    updateAndNotification:{
        type: Boolean,
        default: False
    },
   

}, {timestamps : true});




module.exports = Users;


