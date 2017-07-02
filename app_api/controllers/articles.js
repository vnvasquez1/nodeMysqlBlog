var mysql = require('mysql');

var connection = mysql.createConnection({
  host:'192.168.1.181',
  database:'blog_db'
})


module.exports.postArticle = function(req,res){
  var q = "INSERT INTO articles (title,text) VALUES ('"
        + req.body.title
        + "','"
        + req.body.text
        + "')";

   connection.query(q,function(error,response){
     if(error)throw error;
     res.json(response);
   }); 
}

module.exports.getArticles = function(req,res){
   var q = "SELECT * FROM articles ORDER BY created_at DESC";
   connection.query(q,function(error,response){
     if(error)throw error;
     res.json(response);
   }); 
 
}
module.exports.getSingleArticle = function(req,res){
   var q = "SELECT * FROM articles WHERE id = "
          + req.params.id;
   connection.query(q,function(error,response){
     if(error)throw error;
     res.json(response[0]);
   }); 
 
}

module.exports.updateArticle = function(req,res){
  var q = "UPDATE articles SET title = '"
        + req.body.title
        + "', text = '"
        + req.body.text
        + "' WHERE id = "
        + req.params.id;
  connection.query(q,function(error,response){
     if(error) throw error; 

     res.json(response);
  })
}

module.exports.deleteArticle = function(req,res){
  var q = "DELETE FROM articles WHERE id = "
        + req.params.id;
  connection.query(q,function(error,response){
     if(error) throw error; 
     res.json(response[0]);
  })
}
