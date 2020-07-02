const express = require('express');
const router = express.Router();

const UserController = require('../controllers/UserController');

router.get("/signUp",UserController.getAddUser);
router.post("/signUp",UserController.postAddUser);




module.exports = router;