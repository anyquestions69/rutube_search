const Sequelize = require("sequelize");
const sequelize = require('../config/database')


const Video = sequelize.define("video", {
   
    video_id:{
      type:Sequelize.NUMBER
    },
    video_title:{
      type: Sequelize.STRING,
    },
    channel_title:{
      type: Sequelize.STRING,
    },
    v_channel_reg_datetime:{
      type: Sequelize.DATE,
    },
    v_channel_type:{
      type: Sequelize.STRING,
    },
    v_category:{
      type: Sequelize.STRING,
    },
    v_pub_datetime:{
      type: Sequelize.STRING,
    }
  },{
    timestamps: false
  });





sequelize.sync({force: false}).then(async function (result){


    
})
.catch(err=> console.log(err));

module.exports = { Video}