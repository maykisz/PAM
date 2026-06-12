const OpenAI = require('openai');

const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

function registerAiRoutes(app) {
    app.post('/ai/task-description', async (req, res) => {
        const { titulo } = req.body;

        if (!titulo) {
            return res.status(400).json({
                error: 'Titulo da tarefa e obrigatorio'
            });
        }

        if (!process.env.OPENAI_API_KEY) {
            return res.status(500).json({
                error: 'Configure OPENAI_API_KEY no arquivo .env'
            });
        }

        try {
            const response = await client.responses.create({
                model: process.env.OPENAI_MODEL || 'gpt-4.1-mini',
                instructions: [
                    'Voce ajuda a escrever descricoes de tarefas para um app de gerenciamento.',
                    'Responda em portugues do Brasil.',
                    'Crie uma descricao objetiva, detalhada e pronta para salvar no banco.',
                    'Nao use markdown, listas ou titulo. Use apenas um paragrafo curto.'
                ].join(' '),
                input: `Titulo da tarefa: ${titulo}`
            });

            res.json({
                descricao: response.output_text.trim()
            });
        } catch (error) {
            res.status(500).json({
                error: 'Erro ao gerar descricao com IA',
                details: error.message
            });
        }
    });
}

module.exports = registerAiRoutes;
