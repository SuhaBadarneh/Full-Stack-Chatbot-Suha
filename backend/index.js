//The start of building server code
import { Configuration, OpenAIApi } from "openai";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

//set up express,
const app = express();
//a port to listen to
const port = 8000;
//the body-parser for receiving input
app.use(bodyParser.json());
//and cors to allow free communications between the frontend and backend
app.use(cors());

//The end of building server code

//The start of building Endpoint code
//In this part, we will build an endpoint that will receive messages from the frontend using the request body and return a response to the caller

//establishing the configuration parameters
const configuration = new Configuration({
  organization: "org-gNGh2t2WYIC9ERDLsocPHEI3",
  apiKey: "",
});
const openai = new OpenAIApi(configuration);

//create an asynchronous POST route
app.post("/", async (request, response) => {
  //receive the chats input from the request body
  const { chats } = request.body;
  const result = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content: "You are a EbereGPT. You can help with graphic design tasks",
      },
      ...chats,
    ],
  });
  response.json({
    output: result.data.choices[0].message,
  });
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
