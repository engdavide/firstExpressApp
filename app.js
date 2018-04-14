// new folder mkdir, cd into folder
// npm init   setup package.json
// npm install PACKAGE --save    install stuff you need with --save to add dep
//                                  into package.json
// TO REQUIRE EXPRESS
// const express = require('express');
// const app = express();
// app.use(express.static("public"))    to include links to public dir
// 
// ROUTING FORMATS
// app.get("/", (req, res) => res.send("homepage...")); 
// 
// app.get("/homepage", function(req, res){
//     res.send("Welcome Home");
// });
// 
// app.get("/repeat/:word/:num", function(req, res){
//   let arr = [];
//   for(let i=0; i < req.params.num; i++) {
//       arr.push(req.params.word);
//       }
//     res.send(arr.join(" "));
// });
// 
// TO RUN SERVER (on cloud 9):
// app.listen(process.env.PORT, process.env.IP, function(){
//     console.log("App is live!!");
// });

//node app.js to run server, ctrl+c to close sever. Preview page in cloud 9

// npm install ejs --save
// EJS Views file. views folder under root
// <%= JS GOES HERE %> Equals sign if you need to print valule, if code only, use <% %>
// In view:
// <%= VAR %>
// In app.js:
// res.render("page.ejs", {VARtoPASS: VARinAppJS})

//LOOP through stuff to render many things
// <% posts.forEach(function(post){ %>
//     <li>
//       <%= post.title %>
//     </li>
// <% }) %>


const express = require('express');
const app = express();

app.get("/", (req, res) => res.send("homepage...")); 

app.get("/speak/:animal", function(req,res){
    let animal = req.params.animal;
    let speak = "something that we're not sure yet";
    switch(animal){
        case "cow":
            speak = "MOOO!!";
            break;
        case "pig":
            speak = "OINK OINK!!";
            break;
        case "dog":
            speak = "WOOF WOOF!!";
            break;
    }
    
    res.send("The "+animal+" says "+speak);
});

app.get("/repeat/:word/:num", function(req, res){
   let arr = [];
   for(let i=0; i < req.params.num; i++) {
       arr.push(req.params.word);
       }
    res.send(arr.join(" "));
});


app.get("*", (req,res) => res.send("what are you doing with your life?"));

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("App is live!!");
});