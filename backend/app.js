const express = require('express');
const app = express();

app.use(  (req, res, next) =>{
       console.log('first middle ware');
  next();
}
);

app.use( '/api/posts', (req, res, next) =>{
  const posts =
  [{id :'1234j',
  title : 'my first hardcoded backend title',
   content: 'first backend content'},
   {id :'65423',
  title : 'my second hardcoded backend title',
   content:  '2nd backend content'}
  ];
res.status(200).json({
  message:'posts fetch sucsessfully',
  posts: posts
});
 //res.send('hello from express');

});

module.exports = app;
