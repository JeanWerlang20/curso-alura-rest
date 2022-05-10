import express from 'express';
import db from "./config/dbConnect.js";

db.on("error", console.log.bind(console, 'erro de conexao'));

db.once("open", () => {
    console.log('conexao com o banco feita com sucesso')
})

const app = express();
app.use(express.json())

const livros = [
    {id:1 , 'titulo': 'senhor dos aneis'},
    {id:2 , 'titulo': 'o hobbit'}
]
 
app.get('/', (req, res) => {
    res.status(200).send('curso express');
})
app.get('/livros', (req, res) => {
    res.status(200).json(livros)
})

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
export default app