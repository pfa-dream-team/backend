const express = require('express')
const router = express.Router()
const ExperienceController = require("../controllers/ExperienceController")

router.post("/addExperience",ExperienceController.postAddExperience)
router.patch("/edit/:id",ExperienceController.patchEditExperience)
router.delete("/delete/:id",ExperienceController.deleteDeleteExperience)









module.exports = router