const { Router } = require('express');
const LivroController = require('../controllers/LivrosController');

const router = Router();

router.get('/livros', LivroController.pegaTodosOsLivros);
router.get('/livros/:id', LivroController.pegaUmLivro);
router.post('/livros', LivroController.criaLivro);
router.put('/livros/:id', LivroController.atualizaLivro);
router.delete('/livros/:id', LivroController.deletaLivro);

module.exports = router;