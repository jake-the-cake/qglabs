"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const data_1 = require("./data");
// init app
const app = (0, express_1.default)();
dotenv_1.default.config();
// global variable
const port = 4200;
// middleware
app.use((0, cors_1.default)());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
// basic routes
app.get('/', (req, res) => {
    res.send('home');
});
//start server and database
app.listen(port, () => {
    console.log(`QGLabs server running on port ${port}.`);
    (0, data_1.dataConnection)(process.env.DATABASE)
        .then(() => {
        console.log('Database connection established.');
    })
        .catch((err) => {
        console.log(err.message);
    });
});
