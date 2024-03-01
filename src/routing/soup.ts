import { Hono } from "hono";
import { getSoups } from "../controllers/soup";

export const soup = new Hono();

soup.get("/", getSoups);
