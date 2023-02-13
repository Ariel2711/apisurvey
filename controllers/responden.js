const {createResponden,
    getLastResponden} = require('../db');

const createGetResponden = async (req, res) => {
    const {nama, alamat, telepon, tgl_create} = req.body;
    let newresponden = await createResponden(nama, alamat, telepon, tgl_create);
    console.log(newresponden);
    
}

const getRespondLast = async(req,res)=>{
    let responden = await getLastResponden()
    res.send(responden)
    console.log(responden);
}

module.exports = {
    createGetResponden,
    getRespondLast
    
}