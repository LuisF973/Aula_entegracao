const express = require('express');
const router = express.Router();
const cursoController = require('../controllers/cursoController');

router.get('/', cursoController.listar);
router.post('/', cursoController.criar);
router.put('/:cod_curso', cursoController.atualizar);
router.delete('/:cod_curso', cursoController.deletar);


module.exports = router;