import express, { Request, Response} from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import path from 'path'
import colors from 'colors';
import cors from 'cors'
import routes from './routes/index';

dotenv.config({
    path: path.resolve(__dirname, ".", "config", "config.env")
});

const PORT = process.env.PORT || 5000;
connectDB();
const app = express();

colors.enable();
app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
}));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

// Routes
app.use('/api/v1', routes);

app.get("/", (req: Request, res: Response) => {
    res.json({
       hola: "Hola mundo"
    })
})

app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold)
})