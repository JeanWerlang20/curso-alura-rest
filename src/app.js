import express from 'express';
import db from "./config/dbConnect.js";
import livros from "./models/Livro.js"
import routes from "./routes/index.js"

db.on("error", console.log.bind(console, 'erro de conexao'));

db.once("open", () => {
    console.log('conexao com o banco feita com sucesso')
})

const app = express();
app.use(express.json())

routes(app);


app.post('/livros', (req, res) => {
    livros.push(req.body);
    res.status(201).send('livro cadastrado com sucesso')
})

app.put('/livros/:id', (req, res) => {
let index = bookSearch(req.params.id);
livros[index].titulo = req.body.titulo;
res.json(livros)
})

app.put('/livros/:id', (req, res) => {
    let {id} = req.params;
    let index = bookSearch(id);
    livros.splice(index, 1);
    res.send(`livro ${id} removido com suceso`);
    })

app.get('/livros/:id', (req, res) => {
    let index = bookSearch(req.params.id);
    res.json(livros[index]);
})

function bookSearch(id){
    return livros.findIndex(livro => livro.id == id)
}
export default app;