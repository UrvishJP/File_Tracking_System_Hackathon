const express = require('express');
const fileController=require('./../controller/fileController');
const userController = require('../controller/userController');

const router = express.Router();

router.get('/getAllFiles',userController.isLoggedIn, fileController.getAllFiles);
router.get('/getAFile/:id',userController.isLoggedIn,fileController.getOneFile);
router.post('/addNewFile',fileController.addNewFile);
router.post('/uploadfile',fileController.multerFileUpload,fileController.uploadFile);
router.patch('/addExistingFile/:id',fileController.addExistingFile);
router.post('/sendFile/:id',fileController.sendFile);
router.get('/fileFilter',fileController.fileFilters);

module.exports = router;