const express = require('express');
const router = express.Router();

const UserController = require('../controllers/UserController');
router.get("/users",UserController.getAllUser);
router.get("/users/:id",UserController.getUser);
router.post("/signUp",UserController.postAddUser);
router.put("/login",UserController.putAuthentification);





module.exports = router;