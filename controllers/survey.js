const {getSurveys,
    getSurveyByID,
    getJawabanByID} = require('../db');

const getAllSurveys = async (req, res) => {
   let surveys = await getSurveys();
   res.send(surveys);
}

const getSurveyID = async(req, res) => {
    const {id} = req.params;
    let survey = await getSurveyByID(id)
    console.log(survey)
    res.send(survey);
 }

 const getJawabanID = async(req, res) => {
    const {id} = req.params;
    let jawaban = await getJawabanByID(id)
    console.log(jawaban)
    res.send(jawaban);
 }

module.exports = {
    getAllSurveys,
    getSurveyID,
    getJawabanID
}