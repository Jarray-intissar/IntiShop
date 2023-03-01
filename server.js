const express=require("express");
const passport = require("passport");

const app =express();
const cors = require('cors');
require("dotenv").config();
app.use(express.json());
app.use(cors());


const  dbConnect = require("./dbConnect");

dbConnect();

//routes
app.use("/user",require("./routes/user"));
app.use("/laptop",require("./routes/laptop"));
app.use("/vetement",require("./routes/vetement"));
app.use("/commande",require("./routes/commande"));
app.use("/contact",require("./routes/contact"));

app.use(passport.initialize());
app.listen(process.env.PORT ,(err)=> err 
? console.log(err)
: console.log("server is connected..."+process.env.PORT) );