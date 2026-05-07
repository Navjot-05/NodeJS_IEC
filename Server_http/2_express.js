let express = require('express');
const app = express();
app.get("/",(req,res) => res.send("using node js module express")).listen(3000);
