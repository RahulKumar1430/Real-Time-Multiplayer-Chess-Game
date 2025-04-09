const express=require("express");
const socket =require("socket.io");
const http =require("http");
const { Chess }=require("chess.js");
const path = require("path");
// const { log } = require("console");

const app=express();

const server=http.createServer(app); // link to express server with http server
const io = socket(server); // it is used to link the both person like a whatapp app

const chess = new Chess();

let players={};
let currentPlayer="w"; // current player white

app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"public")));

app.get("/",(req,res)=>{
    res.render("index",{title:"Chess Game"});
});

io.on("connection",function(uniquesocket){
    console.log("connected");
    
   if(!players.white){
    players.white=uniquesocket.id;
    uniquesocket.emit("playerRole","w");
   }
   else if(!players.black){
    players.black=uniquesocket.id;
    uniquesocket.emit("playerRole","b");
   }
   else{
    uniquesocket.emit("spectatorRole");
   }
   uniquesocket.on("disconnect",function(){
    if(uniquesocket.id=== players.white){
        delete players.white;
    }
    else if(uniquesocket.id === players.black){
        delete players.black;
    }
   });

   uniquesocket.on("move",(move)=>{
    try{
        if(chess.turn()==="w" && uniquesocket.white) return;
        if(chess.turn()==="b" && uniquesocket.black) return;

        const result =chess.move(move);
        if(result){
            currentPlayer=chess.turn();
            io.emit("move",move);
            io.emit("boardState",chess.fen())
        }
        else{
            console.log("Invalid Move: ",move);
            uniquesocket.emit("invalid Move",move);
        }
    }
    catch(err){
        console.log(err);
        uniquesocket.emit("Invalid Move :",move);
    }
   })
}); // it is used which user enter the website url in the chrome it connected directly to our website.

server.listen(3000,function(){
    console.log("listening on port 3000");
});  