import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { soup } from "./routing/soup";
import { serveStatic } from "@hono/node-server/serve-static";

const app = new Hono();

app.use("/static/*", serveStatic({ root: "./" }));

app.route("/api/soup", soup);

const port = 3000;
console.log(`Server is running on port ${port}`);

serve({
  fetch: app.fetch,
  port,
});
