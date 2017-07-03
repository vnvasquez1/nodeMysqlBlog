var request = require('request');
var apiOptions = {server:'http://192.168.1.180:3010'}

module.exports.postArticle = function(req,res){
  var requestOptions, path;  
  path = "/api"
       + "/";
  requestOptions = {
    url:apiOptions.server +path,
    method:"POST",
    json:req.body
   }
  request(requestOptions,function(error,response,body){
    res.redirect('/'+body.insertId);
  });
}
module.exports.getNewArticlePage = function(req,res){
  res.render('post');  
}

module.exports.getArticles = function(req,res){
  var requestOptions, path;  
  path = "/api"
       + "/";
  requestOptions = {
    url:apiOptions.server +path,
    method:"GET",
    json:{}
   }
  request(requestOptions,function(error,response,body){
    res.render('index',{articles:body});
  });
}

module.exports.getSingleArticlePage = function(req,res){
  var requestOptions, path;  
  path = "/api"
       + "/"
       + req.params.id;
  requestOptions = {
    url:apiOptions.server + path,
    method:"GET",
    json:{}
   }
  request(requestOptions,function(error,response,body){
    res.render('show',{article:body});
  });
}

module.exports.getEditArticlePage = function(req,res){
   var requestOptions, path;  
   path = "/api"
       + "/"
       + req.params.id;
  requestOptions = {
    url:apiOptions.server + path,
    method:"GET",
    json:{}
   }
  request(requestOptions,function(error,response,body){
    res.render('edit',{article:body});
  }); 
}

module.exports.updateArticle = function(req,res){
  var requestOptions, path;  
  path = "/api"
       + "/"
       + req.params.id;
  requestOptions = {
    url:apiOptions.server + path,
    method:"PUT",
    json:req.body
    
   }
  console.log("requestOptions");
  console.log(requestOptions);
  request(requestOptions,function(error,response,body){
    console.log("body");
    console.log(body);
    res.redirect('/'+req.params.id);
  });
 
}
module.exports.deleteArticle = function(req,res){
  var requestOptions, path;  
  path = "/api"
       + "/"
       + req.params.id;
  requestOptions = {
    url:apiOptions.server + path,
    method:"DELETE",
    json:{}
   }
  request(requestOptions,function(error,response,body){
    res.redirect('/');
  });
 
}
