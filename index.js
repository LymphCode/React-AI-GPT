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
  const response = await openai.createCompletion({
    model: `${message}`,
    prompt: "Say this is a test",
    max_tokens: 100,
    temperature: 0.5,
  });
  res.json({
    message: response.data.choices[0].text,
  })
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});

