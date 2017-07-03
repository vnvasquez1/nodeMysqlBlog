var express = require('express');
var articlesCtrl = require('../controllers/articles');
var router = express.Router();
console.log("Hello from routes!");
var test = function(req,res,next){
  console.log("passing through server routes")
  return next();
}


/* GET home page. */

router.post('/', articlesCtrl.postArticle );
router.get('/new', articlesCtrl.getNewArticlePage );
router.get('/',test ,articlesCtrl.getArticles );
router.get('/:id',articlesCtrl.getSingleArticlePage);
//  res.render('index', { title: 'Express' });
router.get('/:id/edit',articlesCtrl.getEditArticlePage);

router.put('/:id',test,articlesCtrl.updateArticle);
router.delete('/:id',articlesCtrl.deleteArticle);

module.exports = router;
