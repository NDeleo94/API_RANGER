const Router = require("express")
const rangerController = require("../controllers/ranger")

const router = Router()

router.post("/", rangerController.createRanger)

router.get("/", rangerController.getAllRangers)

router.get("/:id", rangerController.getRangerById)

router.put("/:id", rangerController.updateRanger)

router.delete("/:id", rangerController.deleteRanger)

module.exports = router