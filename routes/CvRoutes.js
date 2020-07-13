const express = require('express')
const router = express.Router()
const CvController = require("../controllers/CvController")

router.post("/addCv",CvController.postAddCv)
router.get("/AllCvs",CvController.getAllCvs)
router.delete("/delete/:id",CvController.deleteDeleteCv)
router.patch("/edit/:id",CvController.patchEditUser)






module.exports = router