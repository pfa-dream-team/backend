const express = require('express');
const router = express.Router();

const UserController = require('../controllers/UserController');

router.post("/signUp",UserController.postAddUser);
router.put("/login",UserController.putAuthentification);





module.exports = router;