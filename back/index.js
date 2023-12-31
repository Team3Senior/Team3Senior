const express = require('express');
const cors=require('cors');
const db=require('./database-squelize/index');
const CartRouter=require('./Routes/RoutesCart');
const loginRoute=require('./Routes/LoginRoute.js')
const signupRoute=require('./Routes/SignupRoute.js')
const wish=require('./Routes/WishRoute.js')
const app = express();
const ContactRouter=require('./Routes/ContactRoute.js')
const userRouter = require('./Routes/UserRoute.js')
const categRouter = require('./Routes/CategoryRoute.js')
const prodRouter = require('./Routes/RoutsProducts.js')
const PORT = 3000;
app.use(cors())
app.use(express.json())

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));

app.use('/api/auth', loginRoute);
app.use('/api/auth', signupRoute);
app.use('/api/cart',CartRouter)
app.use('/api',ContactRouter)
 app.use('/api/products',prodRouter)
 app.use('/api/users',userRouter)
 app.use('/api/categories',categRouter)
app.use('/api/wish',wish)



app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
  });
  

  