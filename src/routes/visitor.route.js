import express from "express";

const visitorRouter=express.Router();

visitorRouter.get("/booking", getVisitorBooking);
visitorRouter.post("/booking", createVisitorBooking);
visitorRouter.get("/", getVisitors);

export default visitorRouter;

