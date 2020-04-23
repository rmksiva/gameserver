var bodyParser = require('body-parser')
var path = require('path')
var admin =  require('./controller/admin.controller')
module.exports = function(app){
    var jsonParser = bodyParser.json()
    var urlencodedParser = bodyParser.urlencoded({ extended: false })
    console.log("called route in lambda");
    app.get('/',urlencodedParser, (req, res) => res.sendFile(path.join(__dirname, 'public/index.html')))
    app.get('/api/users', jsonParser, admin.getUsers)  
}