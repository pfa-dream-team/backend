const express = require('express')
const router = express.Router()
const DocumentController = require("../controllers/DocumentController")

router.post("/addDocument",DocumentController.postAddDocument)
router.get("/allDocuments",DocumentController.getAllDocuments)
router.delete("/deleteDocument/:id",DocumentController.deleteDocument)
router.patch("/editDocument/:id",DocumentController.patchEditDocument)
router.get("/allUserDocuments/:id",DocumentController.getAllUserDocuments)











module.exports = router