
var mysql  = require('mysql');
var connection = mysql.createConnection({
  host     : 'mysql-renzoxpixely.alwaysdata.net',
  user     : '224414',
  password : 'Aliz47801309',
  database : 'renzoxpixely_laraveltawa'
});
 
connection.connect(err=>{
    if(err) throw err; 
    console.log(`Database server Runing!`)
})
 

 
// module.exports = connection;

// const connection=require('../conexion')
const cors = require('cors');


const  express = require('express')

const bodyParser=require('body-parser')
  const PORT =process.env.PORT || 3001

  const app=express();
  app.use(cors());
  app.use(bodyParser.json());

  app.listen(PORT,()=>console.log(`Server runing o port ${PORT}`))

  //rutas
  app.get('/',(req,res)=>{
    res.send('WELCOME  TO MY API')
  })

  app.get('/productos',(req,res)=>{
      const sql ='SELECT * from  articulos'
      connection.query(sql,(error,results)=>{
          if(error) throw error;
          if(results.length>0){
               res.json(results)
          }
          else{
              res.send('Not results')
          }
      })
      
  })

  app.post('/carts',(req,res)=>{
    const sql ='INSERT INTO pedidos SET ?';
    const pedidoObj={
      total:req.body.total,
      cuerpo:req.body.cuerpo
      
    };
    connection.query(sql,pedidoObj,error =>{
      if(error) throw error;
      res.send('Pedido registrado con exito')
    });
    
  });

  app.post('/carrito/:id',(req,res)=>{
    res.send('enviando productos del carito del cliente con Id:')
  })

  
