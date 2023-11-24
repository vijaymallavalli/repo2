// const express = require("express")
// const mongoose = require("mongoose")
// const app = express();
// const cors = require("cors")
// const fileUpload = require("express-fileupload");
// const dotenv = require('dotenv')
// dotenv.config();
// const userRoutes = require("./routes/user")
// const userfiles=require("./routes/upload")
// const userpost=require("./routes/post")
// const userReact = require("./routes/react")
// const conversationRoute = require("./routes/conversation");
// const messageRoute = require("./routes/message");
// app.use(
//     fileUpload({
//       useTempFiles: true,
//     })
//   );
// const options = {
//     origin: "http://localhost:3000",
//     useSucessStatus: 200
// }
// app.use(cors(options));

// app.use(express.json())
// mongoose.connect(process.env.DATABASE_STRING, {
//     useNewUrlParser: true
// })
//     .then(() => console.log("sucessfully connected"))
//     .catch((err) => console.log("not connected", err))
// const PORT = process.env.PORT || 8000
 
// app.use('/', userRoutes,userfiles,userpost,userReact)
// app.use("/api/conversation",conversationRoute);
// app.use("/api/messages",messageRoute);
// app.listen(PORT, () => { 
//     console.log(`sever is running at ${PORT}....`)
// })  

const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const fileUpload = require("express-fileupload");
const dotenv = require('dotenv');

dotenv.config();

// Middleware for file uploads
app.use(
    fileUpload({
        useTempFiles: false, // Storing file data in memory
    })
);

// CORS configuration
const corsOptions = {
    origin: "http://localhost:3000",
    optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

// JSON body parser middleware
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.DATABASE_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("Successfully connected to MongoDB"))
.catch((err) => console.error("Error connecting to MongoDB:", err));

// API routes
const userRoutes = require("./routes/user");
const userFiles = require("./routes/upload");
const userPost = require("./routes/post");
const userReact = require("./routes/react");
const conversationRoute = require("./routes/conversation");
const messageRoute = require("./routes/message");

app.use('/', userRoutes);
app.use('/', userFiles);
app.use('/', userPost);
app.use('/', userReact);
app.use("/conversation", conversationRoute);
app.use("/messeage", messageRoute);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => { 
    console.log(`Server is running at ${PORT}....`);
});
