![download](https://github.com/Viniciussalineiro/ProjetoNode.js/assets/134237185/b9acea82-df54-49b5-ba80-459100ad975f)

Projeto Node.js Criando API Rest com Ecpress e MongoDB


import { autor } from "../models/Autor.js";
import livro from "../models/Livro.js";

Rotas Livros

class LivroController {

  static async listarLivros (req,res) {
    try{
      const listaLivros = await livro.find({});
      res.status(200).json(listaLivros);
    } catch (erro) {
      res.status(500).json({message: `${erro.message}- 
      falha na requisição`});

    }
 
  };

  static async listarLivroPorId (req,res) {
    try{
      const id = req.params.id;
      const LivroEncontrado = await livro.findById(id);
      res.status(200).json(LivroEncontrado);
    } catch (erro) {
      res.status(500).json({message: `${erro.message}- 
      falha na requisição do livro`});

    }
 
  };

  static async cadastraLivro (req,res) {
    const novoLivro = req.body; 
    try{ 
    const autorEncontrado = await autor.findById(novoLivro.autor);
    const livroCompleto = {...novoLivro,autor: {...autorEncontrado.
    _doc }};
    const livroCriado = await livro.create(livroCompleto);
    res.status(201).json({message:"criado com sucesso" , livro:
    novoLivro });
    }catch (erro) {
    res.status(500).json({message: `${erro.message} - falha 
    ao cadastra livro`});

    }
  }

  static async atualizarLivro (req,res) {
    try{
      const id = req.params.id;
       await livro.findByIdAndUpdate(id, req.body);
      res.status(200).json({message:"livro atualizado"});
    } catch (erro) {
      res.status(500).json({message: `${erro.message}- 
      falha na requisição do livro`});

    }
 
  };

  static async excluirLivro (req,res) {
    try{
      const id = req.params.id;
       await livro.findByIdAndDelete(id, req.body);
      res.status(200).json({message:"livro excluido com sucesso"});
    } catch (erro) {
      res.status(500).json({message: `${erro.message}- 
      falha na exclução`});

    }
 
  };

  static async listarLivrosPorEditora (req,res) {
    const editora = req.query.editora;
    try{
      const listarLivrosPorEditora = await livro.find({editora:editora});
      res.status(200).json(listarLivrosPorEditora);
    }catch (erro) {
      res.status(500).json({message: `${erro.message}- 
      falha na busca`});

    }
  }
 
};

export default LivroController;

Rotas Autores

import {autor} from "../models/Autor.js";



class AutorController {

  static async listarAutores (req,res) {
    try{
      const listaAutor = await autor.find({});
      res.status(200).json(listaAutor);
    } catch (erro) {
      res.status(500).json({message: `${erro.message}- 
      falha na requisição`});

    }
 
  };

  static async listarAutorPorId (req,res) {
    try{
      const id = req.params.id;
      const AutorEncontrado = await autor.findById(id);
      res.status(200).json(AutorEncontrado);
    } catch (erro) {
      res.status(500).json({message: `${erro.message}- 
      falha na requisição do autor`});

    }
 
  };

  static async cadastraAutor (req,res) {
    try{
     const novoAutor = await autor.create(req.body);  
    res.status(201).json({message:"criado com sucesso" , livro:
    novoAutor });
    }catch (erro) {
    res.status(500).json({message: `${erro.message} - falha 
    ao cadastra autor`});

    }
  }

  static async atualizarAutor (req,res) {
    try{
      const id = req.params.id;
       await autor.findByIdAndUpdate(id, req.body);
      res.status(200).json({message:"autor atualizado"});
    } catch (erro) {
      res.status(500).json({message: `${erro.message}- 
      falha na requisição do autor`});

    }
 
  };

  static async excluirAutor (req,res) {
    try{
      const id = req.params.id;
       await autor.findByIdAndDelete(id, req.body);
      res.status(200).json({message:"autor excluido com sucesso"});
    } catch (erro) {
      res.status(500).json({message: `${erro.message}- 
      falha na exclução`});

    }
 
  };

};

export default AutorController;

app.js

app.get("/", (req, res) => {
  res.status(200).send("Curso de Node.js");
});

app.get("/livros", async (req, res) => {
  const listaLivros = await livro.find({});
  res.status(200).json(listaLivros);
});

app.get("/livros/:id", (req, res) => {
  const index = buscaLivro(req.params.id);
  res.status(200).json(livros[index]);
})

app.post("/livros", (req, res) => {
  livros.push(req.body);
  res.status(201).send("livro cadastrado com sucesso");
});

app.put("/livros/:id", (req, res) => {
  const index = buscaLivro(req.params.id);
  livros[index].titulo = req.body.titulo;
  res.status(200).json(livros);
});

app.delete("/livros/:id", (req, res) => {
  const index = buscaLivro(req.params.id);
  livros.splice(index, 1);
  res.status(200).send("livro removido com sucesso");
});

