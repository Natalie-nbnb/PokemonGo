var express = require('express');
var router = express.Router();

const users = require('../controllers/user.controller');

router.get('/',users.getLocal);
router.get('/PokemonPage' , users.getPokemons);
router.get('/pokemonSql' , users.getPokemonSql); //sql
router.get('/addPokemon',users.addNewPokemon); //page
router.get('/insertPokemon',users.insertPokemon); //action
router.get('/deletePokemon',users.deletepkm); //page
router.get('pokemonDelete',users.pokemonDelete);//action
router.get('/mainPage',users.getMainPage);

module.exports = router;