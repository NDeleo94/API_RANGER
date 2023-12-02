const Router = require("express")
const seasonController = require("../controllers/season")

const router = Router()

router.post("/", seasonController.createSeason)

router.get("/", seasonController.getAllSeasons)

router.get("/:id", seasonController.getSeasonById)

router.put("/:id", seasonController.updateSeason)

router.delete("/:id", seasonController.deleteSeason)

module.exports = router