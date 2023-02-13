const {createRespond,
    getRespond,
    getRespondBySurvey} = require('../db');

const createGetResponden = async (req, res) => {
    const {id_survey, id_responden, id_surveyor, jawaban, tgl_create} = req.body;
    let newrespond = await createRespond(id_survey, id_responden, id_surveyor, jawaban, tgl_create);
    console.log(newrespond);
}

const getResponds = async (req, res) => {
    let responds = await getRespond();
    res.send(responds);
    console.log(responds);
}

const getRespondByID = async (req, res) => {
    const {id} = req.params;
    let respond = await getRespondBySurvey(id);
    res.send(respond);
    console.log(respond);
}

module.exports = {
    createGetResponden,
    getResponds,
    getRespondByID
    
}