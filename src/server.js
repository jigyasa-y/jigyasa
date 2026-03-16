import express from "express";
import dotenv from "dotenv";
import db from "./lib/db.js" 
// import authRoute from "./routes/auth.route.js"
// import usersRoute from "./routes/users.route.js"
import userRouter from "./routes/users.route.js";
import deviceRouter from "./routes/device.route.js";
import attendenceRouter from "./routes/attendence.route.js";
import requestRouter from "./routes/request.route.js";
import employeesRoute from "./routes/employees.route.js";
import masterRoute from "./routes/master.route.js";
import visitorRouter from "./routes/visitor.route.js";


const PORT=process.env.PORT;

const app=express();
dotenv.config();
app.use(express.json())

app.use("/api/users", userRouter);
app.use("/api/employee",employeesRoute);
app.use("/api/master",masterRoute);
app.use("/apii/device",deviceRouter);
app.use("/api/attendence",attendenceRouter);
app.use("/api/requests",requestRouter);
app.use("/api/visit".visitorRouter);

app.use(express.json());

const testDB = async () => {
  try {
    const result = await db.query("SELECT * FROM users");
    
   
  } catch (error) {
    console.error(error);
  }
};

testDB();



app.listen(PORT, ()=>{
  console.log("server is running at http://localhost:3000");
})