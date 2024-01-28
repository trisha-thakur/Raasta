from langchain.chat_models import ChatAnthropic
from langchain.agents.agent_toolkits import PlayWrightBrowserToolkit

# A synchronous browser is available, though it isn't compatible with jupyter.
from langchain.tools.playwright.utils import (
    create_sync_playwright_browser,
)
from langchain.agents import initialize_agent, AgentType

# In a seperate .env file add your environment variables
# ANTHROPIC_API_KEY=sk-ant-xxxxxxxxxxxxxxxxx

from dotenv import load_dotenv

load_dotenv()

# Following line generates the chat response using @LangChainAI's ChatAnthropic()
# To use ChatAnthropic you should have the @anthropic-ai/sdk package installed,
# with the ANTHROPIC_API_KEY environment variable set.
llm = ChatAnthropic (model="claude-1", temperature=0, max_tokens_to_sample=2000)

# For the above line, I could use any other LLM, e.g., ChatOpenAI(), OpenAI()

def main():
    sync_browser = create_sync_playwright_browser()
    # It's always recommended to instantiate using the from_browser method
    toolkit = PlayWrightBrowserToolkit.from_browser (sync_browser=sync_browser)

    tools = toolkit.get_tools()

    agent_chain = initialize_agent(
        tools,
        agent = AgentType.STRUCTURED_CHAT_ZERO_SHOT_REACT_DESCRIPTION,
        verbose=True
    )

    result = agent_chain.run("Get all links from https://en.wikipedia.org/wiki/Large_language_model "
                         "only return links starting with https and "
                         "omit this portion https://en.wikipedia.org")


    print(result)