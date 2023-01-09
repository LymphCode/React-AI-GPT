import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
  organization: "org-Sv5ywSdJVQU0pVE97V3fElmC",
  apiKey: "sk - aKjEIlE6Fc86jFHgLdh1T3BlbkFJXQJm7d92HER2Rtsa9pAJ",
});
const openai = new OpenAIApi(configuration);
// const response = await openai.listEngines();