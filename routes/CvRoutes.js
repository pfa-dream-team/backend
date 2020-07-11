const express = require('express')
const router = express.Router()
const CvController = require("../controllers/CvController")

router.post("/addCv",CvController.postAddCv)
router.get("/AllCvs",CvController.getAllCvs)





module.exports = router