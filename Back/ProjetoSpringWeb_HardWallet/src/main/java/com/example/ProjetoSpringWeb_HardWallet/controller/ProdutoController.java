package com.example.ProjetoSpringWeb_HardWallet.controller;

import com.example.ProjetoSpringWeb_HardWallet.dto.ProdutoDTO;
import com.example.ProjetoSpringWeb_HardWallet.service.ProdutoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ProdutoController {
    @Autowired
    private ProdutoService produtoService;

    @GetMapping("/main/produtos")
    public List<ProdutoDTO> listarProdutos(){
        return produtoService.obterTodosProdutos();
    }

    @GetMapping("/main/produtos/{id}")
    public ProdutoDTO mostrarProduto(@PathVariable Long id){
        return produtoService.findProdutoById(id);
    }
}
