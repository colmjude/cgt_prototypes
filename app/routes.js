var fs = require("fs");
var path = require('path');

module.exports = {
  bind : function (app) {

    app.get('/', function (req, res) {
      res.render('index');
    });


    app.get('/jobs/search_by_skill', function (req, res) {
      var data;
      fs.readFile(path.join(__dirname, 'data/listings.json'), {encoding: 'utf-8'}, function (err, data) {
          if (err) {
              throw err;
          } else {
            data = JSON.parse(data);
          }
          res.render('jobs/search_by_skill', {listings: data});
      });
    });
    // add your routes here

  }
};
