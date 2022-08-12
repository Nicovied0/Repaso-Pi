const { Router } = require("express");
const { getCharacters } = require("../controllers/getAllCharacter");
const { Character } = require("../db");

const router = Router();

// Configurar los routers

router.get('/character',getCharacters)


module.exports = router;
