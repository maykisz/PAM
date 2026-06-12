# apiPAM

Aplicativo Expo/React Native para criar tarefas, listar tarefas e listar desenvolvedores usando uma API Node/Express com MySQL.

## Estrutura

- `meu-app/App.js`: telas do aplicativo.
- `meu-app/server/api.js`: arquivo principal da API Express.
- `meu-app/server/db.js`: conexao com o MySQL.
- `meu-app/server/crud/get.js`: rotas de consulta.
- `meu-app/server/crud/post.js`: rotas de criacao.
- `meu-app/server/crud/put.js`: rotas de atualizacao.
- `meu-app/server/crud/delete.js`: rotas de exclusao.
- `meu-app/server/crud/ai.js`: rota que usa OpenAI para sugerir descricao de tarefa.
- `meu-app/server/schema.sql`: script SQL para criar banco, tabelas e dados de exemplo.
- `meu-app/.env.example`: modelo das variaveis de ambiente.

## Instalar

```bash
cd meu-app
npm install
```

## Configurar o banco

Copie o arquivo de exemplo:

```bash
copy .env.example .env
```

Para XAMPP com usuario `root` sem senha, deixe assim:

```env
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=
DB_NAME=bdTeste
PORT=3000
OPENAI_API_KEY=
OPENAI_MODEL=gpt-4.1-mini
```

Para usar o botao `IA sugere descricao`, preencha `OPENAI_API_KEY` no `.env`.

Crie o banco pelo terminal do XAMPP:

```bash
Get-Content "server\schema.sql" | C:\xampp\mysql\bin\mysql.exe -u root
```

Esse script cria:

- `tbDesenvolvedor`
- `tbTarefa`

## Rodar a API

```bash
npm run api
```

Rota da API:

```text
http://localhost:3000/tasks
http://localhost:3000/developers
```

Rotas de tarefas:

```text
GET    /tasks
POST   /tasks
PUT    /tasks/:id
DELETE /tasks/:id
POST   /ai/task-description
```

## Rodar o app na web

Em outro terminal:

```bash
npm run web
```

Normalmente o Expo abre em:

```text
http://localhost:8081
```

## Comandos uteis

```bash
npm run api
npm run web
npm run dev
```
