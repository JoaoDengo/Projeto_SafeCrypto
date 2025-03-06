package com.example.ProjetoSpringWeb_HardWallet.controller;

import com.example.ProjetoSpringWeb_HardWallet.dto.CarrinhoDTO;
import com.example.ProjetoSpringWeb_HardWallet.model.Produto;
import com.example.ProjetoSpringWeb_HardWallet.service.CarrinhoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class CarrinhoController {
    @Autowired
    private CarrinhoService carrinhoService;

    @PostMapping("/main/carrinho")
    public CarrinhoDTO adicionarProduto(@RequestBody Produto produto) {
        return carrinhoService.addCarrinho(produto);
    }

    @GetMapping("/main/carrinho")
    public CarrinhoDTO listarCarrinho() {
        return carrinhoService.findAll();
    }

    @GetMapping("/main/carrinho/total")
    public Double totalCarrinho() {
        return carrinhoService.contaTotalCarrinho();
    }

    @DeleteMapping("/main/carrinho/{nomeProduto}")
    public void deletarProduto(@PathVariable String nomeProduto) {
        carrinhoService.deleteCarrinho(nomeProduto);
    }

    @PutMapping("/main/carrinho/{nomeProduto}/{quantidade}")
    public Double atualizarProduto(@PathVariable String nomeProduto,@PathVariable int quantidade) {
        carrinhoService.atualizaCarrinho(nomeProduto, quantidade);
        return carrinhoService.contaTotalCarrinho();
    }
}
