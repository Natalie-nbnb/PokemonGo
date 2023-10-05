
const connection = require('../config/database.config');

exports.getPokemonSql= (req ,res) => {
    let userSQL = `SELECT * FROM pokemon_go`;
    connection.query(userSQL, (err, result) => {
        if (err) {
            console.log(err);
        }
        console.log(result);
        res.json(result);
    })
}

exports.getPokemons = (req,res) =>{
    let sql = `select * from pokemon_go`;
    console.log(sql);
    connection.query(sql,(err,result) => {
        if(err) console.log(err);
        res.render('pokemon', { pokemon_go: result });

    })
}
exports.getLocal=(req,res)=>{
    res.render('main');
}



exports.getMainPage = (req , res) => {
    res.render('main');
}

exports.addNewPokemon = (req,res)=>{
    res.render('newPokemon');
}
exports.insertPokemon = (request,rep)=>{
    const {name , gen , stage , evol , famID , cgen , type1 , type2 , weather1 , weather2 , stat , atk , def , sta , 
        legend , aquire , spawn , region , raidable , hatch , shine , nest , Pnew , gettable , Fevolve , cp40 , cp39 } = request.body;
    let insertSQL = `INSERT INTO pokemon_go 
    ( Name, Generation, Evolution_Stage, Evolved, FamilyID, Cross_Gen, Type_1, Type_2, Weather_1,
         Weather_2 , STAT_TOTAL , ATK , DEF , STA , Legendary , Aquireable , Spawns, Regional, Raidable, Hatchable, Shiny,
          Nest, New, Not-Gettable, Future_Evolve, CP40, CP39)
    VALUES
    ("${name}" , "${gen}" , "${stage}" , "${evol}" , "${famID}" , "${cgen}" , "${type1}" , "${type2}" , "${weather1}" , "${weather2}" ,
     "${stat}", "${atk}" , "${def}" , "${sta}", "${legend}" , "${aquire}" , "${spawn}" , "${region}" , "${raidable}" , "${hatch}" ,
      "${shine}" , "${nest}" , "${Pnew}" , "${gettable}" , "${Fevolve}" , "${cp40}" , "${cp39}")`;

    console.log(insertSQL);

    connection.query(insertSQL, (err, result)=>{
        if(err) throw err;
        rep.redirect('/api/PokemonPage'); 
    })
}
exports.deletepkm = (req,res)=>{
    res.render('delPokemon');
}
exports.pokemonDelete = (request,rep)=>{
    const {id } = request.body;
    let delSQL = `DELETE FROM pokemon_go WHERE Pokedex_Num = ("${id}")`;

    console.log(delSQL);

    connection.query(delSQL, (err, result)=>{
        if(err) throw err;
        rep.redirect('/api/PokemonPage'); 
    })
}
