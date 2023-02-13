const express =  require ('express');
const {getAllSurveys,
    getSurveyID,
    getJawabanID} = require ('../controllers/survey');

const router = express.Router();

router.get('/', getAllSurveys)
router.get('/:id', getSurveyID)
router.get('/jawaban/:id', getJawabanID)

module.exports =  router;