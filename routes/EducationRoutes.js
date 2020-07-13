const express = require('express')
const router = express.Router()
const EducationController = require("../controllers/EducationController")

router.post("/addEducation",EducationController.postAddEducation)
router.patch("/edit/:id",EducationController.patchEditEducation)
router.delete("/delete/:id",EducationController.deleteDeleteEducation)









module.exports = router