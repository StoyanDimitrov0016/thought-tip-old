import express from "express";
import cors from "cors";
import checkSessionToken from "../middleware/checkUserSession.js";

function expressSetUp(app) {
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(checkSessionToken);
}

export default expressSetUp;
