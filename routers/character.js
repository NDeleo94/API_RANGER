const Router = require("express")
const characterController = require("../controllers/character")

const router = Router()

router.post("/", characterController.createCharacter)

router.get("/", characterController.getAllCharacters)

router.get("/:id", characterController.getCharacterById)

router.put("/:id", characterController.updateCharacter)

router.delete("/:id", characterController.deleteCharacter)

module.exports = router