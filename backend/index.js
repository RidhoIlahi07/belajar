import express from "express";
import session from "express-session";
import cookieParser from 'cookie-parser';
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import Users from "./model/user.js";
import db from './config/Database.js';
import sequelizeStore from 'connect-session-sequelize'
import userRoute from "./router/userRouter.js";
dotenv.config();

const app = express(); //inisialisasi dasar expreess
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))
// const sessionStore = sequelizeStore(session.Store);

// const store = new sessionStore({
//     db: db,
// });
try {
    await db.authenticate();
    console.log('Database Connected...');
    // await Users.sync();
} catch (error) {
    console.error(error);
}
// app.use(
//     session({
//         secret: process.env.ACCESS_TOKEN_SECRET,
//         resave: false,
//         saveUninitialized: true,
//         store: store,
//         cookie: {
//             secure: 'auto',
//         },
//     })
// );


app.get(`/`, (req, res) => {
    res.send('Hello World!')
});


// app.use(userRoute);
app.post('/', (req, res) => {

    console.log("ini -> ", JSON.stringify(req.body));
    res.send(req.body.self);
});

// store.sync();

app.listen(3000, () => console.log("server running in port 3000"));
