var express      = require('express'),
    articlesCtrl = require('../controllers/articles'),
    router       = express.Router();

router.post('/',articlesCtrl.postArticle);
router.get('/',articlesCtrl.getArticles);
router.get('/:id',articlesCtrl.getSingleArticle);

router.put('/:id',articlesCtrl.updateArticle);

router.delete('/:id',articlesCtrl.deleteArticle);

module.exports = router;
