//routes
const {Router} = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.json({'Title': 'ES SOLO UNA PRUEBA'});
});

module.exports = router;