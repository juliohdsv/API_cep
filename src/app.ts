import express from "express";
import path from "path";
import cors from "cors";
import cepRouter from "./routes/cep.routes";

const app = express();

app.set("views",path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, "..", "public")));

app.use("/", cepRouter);

app.listen(4000, ()=> console.log("Server running"));
