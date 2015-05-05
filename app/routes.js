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

    app.get('/jobs/review', function (req, res) {
      res.render('jobs/review', {skills: [
          {"name": "Agile", "display_name": "Agile"},
          {"name": "javascript", "display_name": "Javascript"},
          {"name": "user-needs", "display_name": "User needs"},
          {"name": "html", "display_name": "HTML"},
          {"name": "css", "display_name": "CSS"},
          {"name": "problem-solving", "display_name": "Problem solving"},
          {"name": "digital-services", "display_name": "Digital services"},
          {"name": "user-centred-design", "display_name": "User centred design"},
          {"name": "web-security", "display_name": "Web security"},
          {"name": "open-standards", "display_name": "Open standards"},
          {"name": "open-source", "display_name": "Open source"}
        ]});
    });

    app.get('/jobs/to_review', function (req, res) {
      res.render('jobs/to_review', {team: [
          {"name": "Joe Bloggs", "role": "Product manager", "team": "Cross government tools"},
          {"name": "Claire Bloggs", "role": "Delivery manager", "team": "Cross government tools", "status": "reviewed"},
          {"name": "Neville Neville", "role": "User researcher", "team": "Cross government tools", "status": "draft"}
        ],
        others: [
            {"name": "Helen Jones", "role": "Developer", "team": "CTS"},
            {"name": "Daniel Hardy", "role": "Developer", "team": "Land Registry"},
            {"name": "Rachel Shade", "role": "User researcher", "team": "Land Registry"}
          ]});
    });

    app.get('/professions/hub', function (req, res) {
      res.render('professions/hub', {listings: [
          {"ref": "1445721", "role": "Financial Officer", "department": "Ministry of Justice", "closing": "closes in 2 days"},
          {"ref": "1450462", "role": "Export Finance Adviser", "department": "UK Export Finance", "closing": "closes in 2 days"},
          {"ref": "1439911", "role": "Financial Accounting Deputy Manager", "department": "Ministry of Defence", "closing": "closes in 4 days"},
          {"ref": "1451156", "role": "Senior Finance Manager", "department": "Office of Gas and Electricity Markets", "closing": "2 weeks to go"},
          {"ref": "1450575", "role": "Financial Modelling Analyst", "department": "Homes and Communities Agency", "closing": "1 week to go"}
        ]});
    });

    app.get('/jobs/description_developer', function (req, res) {
      var data;
      fs.readFile(path.join(__dirname, 'data/dev_jd.json'), {encoding: 'utf-8'}, function (err, data) {
          if (err) {
              throw err;
          } else {
            data = JSON.parse(data);
          }
          res.render('jobs/description_developer', data);
      });
    });
  }
};
