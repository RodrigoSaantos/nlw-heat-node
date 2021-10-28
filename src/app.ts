import "dotenv/config";
import express from 'express';
import { router } from "./routes";
import http from "http";
import { Server } from "socket.io";

const app = express();
app.use(express.json());

app.use(router);

app.get('/github', (request, response) => {
  response.redirect(`https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`)
});

app.get("/signin/callback", (request, response) => {
  const { code } = request.query;

  return response.json(code);
});

app.listen(3333, () => {
  console.log(`✨ Server is running on port 3333`);
});
