const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  organization: "org-Sv5ywSdJVQU0pVE97V3fElmC",
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);

async function callApi() {
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: "Say this is a test",
    max_tokens: 7,
    temperature: 0,
  });
  console.log(response.data.choices[0].text)
}

callApi()