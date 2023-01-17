const { Configuration, OpenAIApi } = require("openai");
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const configuration = new Configuration({
  organization: "org-Sv5ywSdJVQU0pVE97V3fElmC",
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);

const app = express()
app.use(bodyParser.json())
app.use(cors())

const port = 3080

app.post('/', async (req, res) => {
  const { message } = req.body;
  console.log(message)
  // const response = await openai.createCompletion({
  //   model: "text-davinci-003",
  //   prompt: "Say this is a test",
  //   max_tokens: 7,
  //   temperature: 0,
  // });
  // console.log(response.data.choices[0].text)
  res.json({
    // data: response.data
    data: message,
  })
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});

