var path = require("path");

module.exports = function(app){

var formInfo = [ {
    name:"Shelby",
  photo:"http://pngimg.com/uploads/girls/girls_PNG6462.png",
  scores:[
      "1",
      "1",
      "1",
      "1",
      "1",
      "1",
      "1",
      "1",
      "1",
      "1"
     
     ]
}, 
{
name:"Smiley Guy", 
photo:"http://pngimg.com/uploads/smiley/smiley_PNG143.png", 
scores: ["5","5","5","5","5","5","5","5","5","5"]
}
]


app.get("/api/friends", function(req, res) {
    return res.json(formInfo);
  });
  
  app.post("/api/friends", function(req, res) {
      // req.body hosts is equal to the JSON post sent from the user!!!! which is on the html survey.html page
      // This works because of our body parsing middleware
      var newInfo = req.body;
    
      // Using a RegEx Pattern to remove spaces from newCharacter
      // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
      //newtable.routeName = newtable.name.replace(/\s+/g, "").toLowerCase();
    console.log = newInfo; 
     // console.log(newInfo.scores[2]);  //console logs the json from survey.html page 
  
    
      formInfo.push(newInfo);   //push the new form information into formInfo which is defined above
    
      res.json(newInfo);
    });

  }