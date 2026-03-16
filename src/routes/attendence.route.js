import express from "express";

import { getAttendenceLogs,createAttendanceLog,getDashboardStats } from "../controllers/attendence.controller";
const attendenceRouter=express.Router();

attendenceRouter.get("/logs",getAttendenceLogs);
attendenceRouter.post("/logs",createAttendanceLog);
attendenceRouter.get("/stats",getDashboardStats);

export default attendenceRouter;


