const express = require('express');
const fileController=require('./../controller/fileController');

const router = express.Router();

router.get('/getAllFiles', fileController.getAllFiles);
router.get('/getAFile/:id',fileController.getOneFile);
router.post('/addNewFile',fileController.addNewFile);
router.patch('/addExistingFile/:id',fileController.addExistingFile);
router.post('/sendFile/:id',fileController.sendFile);

module.exports = router;