const express = require("express");

const app = express();
const PORT= 3000;

app.get('/',(req,res)=>{ res.send('Hello world!')});

app.get("/users", (req, res) => {
    res.json([
      {
        id: 1,
        name: "User Userson",
      },
    ]);
  });

app.get("/products", (req,res) => {
    const products = [
    {
      id: 1,
      name: "hammer",
    },
    {
      id: 2,
      name: "screwdriver",
    },
    {
      id: 3,
      name: "wrench",
    },
   ];
  
   res.json(products);
  });

app.listen(PORT,()=> console.log(`Listening on ${PORT}`))
