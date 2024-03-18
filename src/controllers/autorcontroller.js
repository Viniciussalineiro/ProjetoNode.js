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