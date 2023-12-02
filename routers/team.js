const Router = require("express")
const teamController = require("../controllers/team")

const router = Router()

router.post("/", teamController.createTeam)

router.get("/", teamController.getAllTeams)

router.get("/:id", teamController.getTeamById)

router.put("/:id", teamController.updateTeam)

router.delete("/:id", teamController.deleteTeam)

module.exports = router