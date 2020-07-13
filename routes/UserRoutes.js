const express = require('express');
const router = express.Router();

const UserController = require('../controllers/UserController');
router.get("/users",UserController.getAllUser);
router.get("/users/:id",UserController.getUser);
router.delete("/users/delete/:id",UserController.deleteDeleteUser);
router.patch("/users/edit/:id",UserController.patchEditUser);
router.patch("/users/active/:id",UserController.patchActivateUser);
router.patch("/users/banish/:id",UserController.patchBanishUser);
router.post("/signUp",UserController.postAddUser);
router.put("/login",UserController.putAuthentification);





module.exports = router;