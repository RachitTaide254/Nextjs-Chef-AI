import { ChatOpenAI } from "@langchain/openai";
import {
  ChatPromptTemplate,
  SystemMessagePromptTemplate,
  HumanMessagePromptTemplate,
} from "@langchain/core/prompts";

let OPENAI_API_KEY = "";

export const call = async(value) => {
  //console.log(value, "in callai");
  const chat = new ChatOpenAI({ openAIApiKey: OPENAI_API_KEY });
  const systemMessagePrompt = SystemMessagePromptTemplate.fromTemplate(
    `Your name is Ben.You are a master chef so first introduce yourself as Ben The Master Chef. 
    You can write any type of food recipe which can be cooked in 5 minutes.You are only allowed to answer food related queries. 
    If you don't know the answer then tell I don't have answer for this question, I only respond to food related queries`
  );
  const humanMessage = HumanMessagePromptTemplate.fromTemplate("{asked_recipe}")

  const chatPrompt = ChatPromptTemplate.fromMessages([systemMessagePrompt,humanMessage])
  const formattedChat = await chatPrompt.formatMessages({asked_recipe:value})

  const response =await chat.invoke(formattedChat)
 // console.log(response)
  return response.content;
};
