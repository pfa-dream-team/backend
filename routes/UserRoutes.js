const express = require('express');
const router = express.Router();

const UserController = require('../controllers/UserController');
router.get("/users",UserController.getAllUser);
router.get("/users/:id",UserController.getUser);
router.delete("/users/delete/:id",UserController.deleteDeleteUser);
router.put("/users/edit/:id",UserController.putEditUser);
router.patch("/users/active/:id",UserController.patchActivateUser);
router.post("/signUp",UserController.postAddUser);
router.put("/login",UserController.putAuthentification);





module.exports = router;