const { Configuration, OpenAIApi } = require("openai");
const http = require("http");
require("dotenv").config();
const { hostname } = require("os");
const port = 4000;

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(config);

const server = http.createServer(async (req, res) => {
  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: " I love ",
    // max_tokens: 5,
    // echo: true,
    suffix: "doe't matter now",
  });
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  // res.write("response from server without chat GPT call");
  res.write(completion.data.choices[0].text);
  res.end();
});

server.listen(port, hostname, () => {
  console.log("Server running at http://${hostname}:${port}/");
});
