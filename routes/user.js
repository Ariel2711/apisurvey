const express =  require ('express');
const { getSurveyorLogin, getUserLogin, getUser} = require ('../controllers/user');

const router = express.Router();

router.get('/', getUser)
router.get('/:username/:password', getUserLogin)
router.get('/:id', getSurveyorLogin)

// router.post('/', createUser);

// router.delete('/:id', deleteUser);

// router.patch('/:id', updateUser);

module.exports =  router;