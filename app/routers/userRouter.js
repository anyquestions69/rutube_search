const express = require("express");
const videoController = require("../controllers/videoController.js");
const videoRouter = express.Router();
 
videoRouter.get("/", videoController.getAll);
videoRouter.get('/:id', videoController.getOne)

 
module.exports = videoRouter;