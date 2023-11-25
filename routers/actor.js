const Router = require("express")
const actorController = require("../controllers/actor")

const router = Router()

router.post("/", actorController.createActor)

router.get("/", actorController.getAllActors)

router.get("/:id", actorController.getActorById)

router.put("/:id", actorController.updateActor)

router.delete("/:id", actorController.deleteActor)

module.exports = router