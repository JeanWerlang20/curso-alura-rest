import express from 'express'

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

function bookSearch(id){
    return livros.findIndex(livro => livro.id == id)
}
export default app