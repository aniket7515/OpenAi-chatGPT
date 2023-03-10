const dotenv = require('dotenv')
dotenv.config()




const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);


exports.summaryController = async (req, res) => {
    try {
        const { text } = req.body;
        const { data } = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: `Summarize this ${text}`,
            max_tokens: 500,
            temperature: 0.5,
        })

        if (data) {
            if (data.choices[0].text) {
                return res.status(200).json(data.choices[0].text)
            }
        }

    } catch (error) {
        console.log(error);
        return res.status(404).json({
            message: error.message
        })
    }
}





exports.paragraphController = async (req, res) => {
    try {
        const { text } = req.body;
        const { data } = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: `Write detail paragraph about ${text}`,
            max_tokens: 1000,
            temperature: 0.5,
        })

        if (data) {
            if (data.choices[0].text) {
                return res.status(200).json(data.choices[0].text)
            }
        }

    } catch (error) {
        console.log(error);
        return res.status(404).json({
            message: error.message
        })
    }
}

exports.chatBotController = async (req, res) => {
    try {
        const { text } = req.body;
        const { data } = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: `Answer question similar to how yoda from star war would.
      Me: 'what is your name?'
      Tiger: 'yoda is my name'
      Me: ${text}`,
            max_tokens: 300,
            temperature: 0.7,
        })

        if (data) {
            if (data.choices[0].text) {
                return res.status(200).json(data.choices[0].text)
            }
        }

    } catch (error) {
        console.log(error);
        return res.status(404).json({
            message: error.message
        })
    }
}

exports.jsconverterController = async (req, res) => {
    try {
        const { text } = req.body;
        const { data } = await openai.createCompletion({
            model: "text-davinci-002",
            prompt: `/* convert these instruction into javascript code \n${text}`,
            max_tokens: 500,
            temperature: 0.2,
        })

        if (data) {
            if (data.choices[0].text) {
                return res.status(200).json(data.choices[0].text)
            }
        }

    } catch (error) {
        console.log(error);
        return res.status(404).json({
            message: error.message
        })
    }
}
