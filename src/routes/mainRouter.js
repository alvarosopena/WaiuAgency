const express = require('express');
const router = express.Router();
const controller = require('../controllers/mainController')

//const authMiddleware = require('../middlewares/authMiddleware');
//const userMiddleware = require('../middlewares/userMiddleware');

router.get('/', controller.index);
router.get('/maintenance', controller.maintenance);
/* router.get('/index-admin', controller.indexAdmin); */
router.get('/contacto', controller.contact);

/* router.get('/inicio', controller.inicio); */


router.get('/no-permitido', controller.notAllowed);
router.get('/cerra-sesion', controller.closeSession);
router.get('/coming-soon', controller.comingSoon);


module.exports = router;