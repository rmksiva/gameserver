
var getUsers = function(req,res){
    console.log("controller method");
    res.send({"message" : "success"});
}
module.exports = {getUsers }