const express =  require ('express');
const {createGetResponden,
    getResponds,
    getRespondByID} = require ('../controllers/respond');

const router = express.Router();

router.post('/', createGetResponden)
router.get('/', getResponds)
router.get('/:id', getRespondByID)

module.exports =  router;