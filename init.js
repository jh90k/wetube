import "./db";
import dotenv from "dotenv";
import app from "./app";
import "./models/Video";
import "./models/Comment";

dotenv.config();

const PORT = process.env.PORT || 4000;
// .env와 연결된 port를 못찾으면 4000으로 연결한다! -> ||

const handleListening = () =>
  console.log(`✅ Listening on : http://localhost:${PORT}`);

app.listen(PORT, handleListening);
