const { getMessages, postMessage } = require('../middlewares/messages.middleware');

const router = require('express').Router();

//rutas de acciones de mensajes
router.get('/messages',getMessages);
router.post('/messages',postMessage)

module.exports = router;