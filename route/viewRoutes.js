const express=require('express');
const router=express.Router();
const viewController=require('./../controller/viewController');
const authController=require('./../controller/userController');

router.get('/',viewController.getLoginPage);

// router.use(authController.isLoggedIn);

router.get('/adminDashboard', authController.isLoggedIn ,viewController.getAdminDigitalDesk);
router.get('/adminDashboard/digitalDesk',authController.isLoggedIn ,viewController.getAdminDigitalDesk);
router.get('/adminDashboard/physicalDesk',authController.isLoggedIn ,viewController.getAdminPhysicalDesk);
// router.get('/adminDashboard/trackFiles',viewController.getTrackFile);
// router.get('/adminDashboard/createUser',viewController.getCreateUserDesk);
// router.get('/adminDashboard/handleTransfer',viewController.getTransferDesk);

// router.get('/userDashboard',viewController.getUserDigitalDesk);
// router.get('/userDashboard/DigitalDesk',viewController.getUserDigitalDesk);
// router.get('/userDashboard/physicalDesk',viewController.getUserPhysicalDesk);

// router.get('/trackfile/:id',viewController.getTrackFileInfo);
// router.get('/file/:id',viewController.getFileInfo);

module.exports=router;