const express = require('express');
const router = express.Router();

const UserController = require('../controllers/UserController');

router.get("/signUp",UserController.getAddUser);
router.post("/signUp",UserController.postAddUser);
router.get("/login",UserController.getAuthentification);
router.post("/login",UserController.postAuthentification);




module.exports = router;