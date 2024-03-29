import express from "express";
import cors from "cors";

function expressSetUp(app) {
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
}

export default expressSetUp;
