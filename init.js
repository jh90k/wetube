import "./db";
import app from "./app";
import dotenv from "dotenv";
dotenv.config();
import "./models/Video";
import "./models/Comment";

const PORT = process.env.PORT || 4000;
//.env와 연결된 port를 못찾으면 4000으로 연결한다! -> ||

const handleListening = () =>
  console.log(`✅ Listening on : http://localhost:${PORT}`);

app.listen(PORT, handleListening);
