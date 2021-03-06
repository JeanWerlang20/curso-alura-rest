import livros from "../models/Livro.js";

class livroController {

    static listarLivros = (req, res) => {
        livros.find((err, livros) => {
            res.status(200).json(livros)
        })
    }

    static cadastrarLivro = (req, res) => {
        let livro = new livros(req.body);

        livro.save((err) => {
            if(err) {
                res.status(500).send({message: `${err.message} - erro ao cadastrar livro.`})
            } else{
                res.status(201).send(livro.toJSON())
            }
        })
    }

}

export default livroController
