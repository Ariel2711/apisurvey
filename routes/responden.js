const express =  require ('express');
const {createGetResponden,getRespondLast} = require ('../controllers/responden');

const router = express.Router();

router.post('/', createGetResponden)

router.get('/', getRespondLast)

module.exports =  router;