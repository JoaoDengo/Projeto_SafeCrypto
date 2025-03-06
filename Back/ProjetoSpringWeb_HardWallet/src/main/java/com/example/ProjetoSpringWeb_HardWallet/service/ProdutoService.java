package com.example.ProjetoSpringWeb_HardWallet.service;

import com.example.ProjetoSpringWeb_HardWallet.dto.ProdutoDTO;
import com.example.ProjetoSpringWeb_HardWallet.model.Produto;
import com.example.ProjetoSpringWeb_HardWallet.repository.ProdutoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProdutoService {
    @Autowired
    private ProdutoRepository produtoRepository;

    public ProdutoDTO cadastrarProduto(Produto produto){
        Produto produtoNovo = produtoRepository.save(produto);
        return new ProdutoDTO(produtoNovo.getId(), produtoNovo.getNome(), produtoNovo.getMarca(), produtoNovo.getPreco(),produtoNovo.getDesconto(),produtoNovo.getImagem(), produtoNovo.getImagem2(), produtoNovo.getImagem3(), produtoNovo.getDescricao(), produtoNovo.getConector(), produtoNovo.getTamanho(), produtoNovo.getQuantidade(), produtoNovo.isMaisVendido(), produtoNovo.isNovidade(), produtoNovo.isDiy());
    }

    public List<ProdutoDTO> obterTodosProdutos(){
        List<Produto> produtos = produtoRepository.findAll();
        return produtos.stream().map(produto -> new ProdutoDTO(produto.getId(), produto.getNome(), produto.getMarca(), produto.getPreco(),produto.getDesconto() ,produto.getImagem(), produto.getImagem2(), produto.getImagem3(), produto.getDescricao(), produto.getConector(), produto.getTamanho(), produto.getQuantidade(),  produto.isMaisVendido(), produto.isNovidade(), produto.isDiy())).toList();
    }

    public ProdutoDTO findProdutoById(Long id) {
        return produtoRepository.findById(id).map(produto -> new ProdutoDTO(produto.getId(), produto.getNome(), produto.getMarca(), produto.getPreco(),produto.getDesconto() ,produto.getImagem(), produto.getImagem2(), produto.getImagem3(), produto.getDescricao(), produto.getConector(), produto.getTamanho(), produto.getQuantidade(), produto.isMaisVendido(), produto.isNovidade(), produto.isDiy())).orElse(null);
    }
}
