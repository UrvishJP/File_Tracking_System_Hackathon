const express=require('express');
const router=express.Router();
const viewController=require('./../controller/viewController');
const authController=require('./../controller/userController');

router.get('/',viewController.getLoginPage);

// router.use(authController.isLoggedIn);

router.get('/adminDashboard', authController.isLoggedIn ,viewController.getAdminDigitalDesk);
router.get('/adminDashboard/digitalDesk',authController.isLoggedIn ,viewController.getAdminDigitalDesk);
router.get('/adminDashboard/physicalDesk',authController.isLoggedIn ,viewController.getAdminPhysicalDesk);
router.get('/adminDashboard/trackFiles',authController.isLoggedIn ,viewController.getTrackFileDesk);
router.get('/adminDashboard/createUser',authController.isLoggedIn ,viewController.getCreateUserDesk);
router.get('/adminDashboard/handleTransfer',authController.isLoggedIn ,viewController.getTransferDesk);

router.get('/userDashboard',authController.isLoggedIn ,viewController.getUserDigitalDesk);
router.get('/userDashboard/DigitalDesk',authController.isLoggedIn ,viewController.getUserDigitalDesk);
router.get('/userDashboard/physicalDesk',authController.isLoggedIn ,viewController.getUserPhysicalDesk);

router.get('/trackfile/:id',authController.isLoggedIn ,viewController.getTrackFileInfo);
router.get('/fileDetail/:id',authController.isLoggedIn ,viewController.getFileInfo);

router.get('/applicant/files',viewController.getApplicantDesk);

module.exports=router;