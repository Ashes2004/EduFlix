import express from 'express';
import QuizRoutes from "./routes/QuizRoutes.js"
import NotetutorRoute from "./routes/AiNoteRoute.js"
import GeneralAIRoute from "./routes/NormalAiChatRoute.js"
import connectDB from './config/connectDB.js';
import UserRoute from "./routes/UserRoutes.js"
const app = express();
connectDB();
app.use(express.json());

app.use("/api/user")
app.use("/api/ai/quiz", QuizRoutes);
app.use("/api/ai/note", NotetutorRoute);
app.use("/api/ai/chat", GeneralAIRoute);
app.listen(5000 , () => console.log('server is running on port 5000'));