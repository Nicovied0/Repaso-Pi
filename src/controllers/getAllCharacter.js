const axios = require('axios');
// const { API_KEY } = process.env;



async function getCharacters(req,res){
    await axios("https://rickandmortyapi.com/api/character")
    .then(resp =>{
        let conteinerCharacters = [];
        const response = resp.data.results
        conteinerCharacters = conteinerCharacters.concat(response)
        // while(conteinerCharacters.length <= 40){
        //      axios(resp.data.info.next)
        //     .then(resp2 =>{
        //         conteinerCharacters = conteinerCharacters.concat(resp2)
        //         resp = resp2
        //     })
        //}

        
       res.send(conteinerCharacters)

    })
}







module.exports = {
    getCharacters,
}
