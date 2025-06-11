const express = require('express');
const router = express.Router();
const alunoController = require('../controllers/alunoController');

router.get('/', alunoController.listar);
router.post('/', alunoController.criar);
router.put('/:matricula', alunoController.atualizar);
router.delete('/:matricula', alunoController.deletar);

module.exports = router;