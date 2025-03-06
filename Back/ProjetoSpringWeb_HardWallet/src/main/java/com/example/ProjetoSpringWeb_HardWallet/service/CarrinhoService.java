package com.example.ProjetoSpringWeb_HardWallet.service;

import com.example.ProjetoSpringWeb_HardWallet.dto.CarrinhoDTO;
import com.example.ProjetoSpringWeb_HardWallet.dto.ItemCarrinhoDTO;
import com.example.ProjetoSpringWeb_HardWallet.dto.ProdutoDTO;
import com.example.ProjetoSpringWeb_HardWallet.model.Carrinho;
import com.example.ProjetoSpringWeb_HardWallet.model.ItemCarrinho;
import com.example.ProjetoSpringWeb_HardWallet.model.Produto;
import com.example.ProjetoSpringWeb_HardWallet.repository.CarrinhoRepository;
import com.example.ProjetoSpringWeb_HardWallet.repository.ProdutoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class CarrinhoService {
    @Autowired
    private CarrinhoRepository carrinhoRepository;

    @Autowired
    private ProdutoRepository produtoRepository;

    public CarrinhoDTO addCarrinho(Produto prod) {
        Produto produtoManaged = produtoRepository.findById(prod.getId()).orElseThrow(() -> new RuntimeException("Produto não encontrado"));
        produtoRepository.inicializaQtdProduto(prod.getId());
        int quantidade = prod.getQuantidade();
        Carrinho c = new Carrinho();

        ItemCarrinho itemCarrinho = new ItemCarrinho(produtoManaged, quantidade);
        c.addItemCarrinho(itemCarrinho);
        carrinhoRepository.save(c);

        List<ItemCarrinhoDTO> itensCarrinhoDTO = c.getItensCarrinho().stream()
                .map(item -> new ItemCarrinhoDTO(item.getId(), new ProdutoDTO(item.getProduto().getId(), item.getProduto().getNome(), item.getProduto().getMarca(), item.getProduto().getPreco(),item.getProduto().getDesconto(),  item.getProduto().getImagem(), item.getProduto().getImagem2(), item.getProduto().getImagem3(),item.getProduto().getDescricao(), item.getProduto().getConector(), item.getProduto().getTamanho(), item.getProduto().getQuantidade(),  item.getProduto().getMaisVendido(), item.getProduto().getNovidade(),item.getProduto().getDiy()))).collect(Collectors.toList());
        return new CarrinhoDTO(c.getId(), itensCarrinhoDTO);
    }

    public CarrinhoDTO findAll() {
        List<Carrinho> carrinhos = carrinhoRepository.findAll();

        List<ItemCarrinhoDTO> itensUnificados = carrinhos.stream()
                .flatMap(c -> c.getItensCarrinho().stream())
                .map(item -> new ItemCarrinhoDTO(
                        item.getId(),
                        new ProdutoDTO(
                                item.getProduto().getId(),
                                item.getProduto().getNome(),
                                item.getProduto().getMarca(),
                                item.getProduto().getPreco(),
                                item.getProduto().getDesconto(),
                                item.getProduto().getImagem(),
                                item.getProduto().getImagem2(),
                                item.getProduto().getImagem3(),
                                item.getProduto().getDescricao(),
                                item.getProduto().getConector(),
                                item.getProduto().getTamanho(),
                                item.getProduto().getQuantidade(),
                                item.getProduto().getMaisVendido(),
                                item.getProduto().getNovidade(),
                                item.getProduto().getDiy()
                        )
                ))
                .toList();

        return new CarrinhoDTO(1L, itensUnificados);
    }


    public Double contaTotalCarrinho() {
        return carrinhoRepository.sumTotalCarrinho();
    }

    public void deleteCarrinho(String nomeProduto) {
        List<Carrinho> carrinhos = carrinhoRepository.findAll();

        for (Carrinho carrinho : carrinhos) {
            List<ItemCarrinho> itensParaRemover = carrinho.getItensCarrinho().stream()
                    .filter(item -> item.getProduto().getNome().contains(nomeProduto))
                    .collect(Collectors.toList());

            for (ItemCarrinho item : itensParaRemover) {
                carrinho.removeItemCarrinho(item);
            }
            carrinhoRepository.save(carrinho);
        }
        carrinhoRepository.deleteProduto(nomeProduto);
    }

    public void atualizaCarrinho(String nomeProduto, int quantidade) {
       carrinhoRepository.updateQuantidadeItemCarrinho(quantidade, nomeProduto);
       produtoRepository.updateQuantidadeProduto(quantidade, nomeProduto);
    }
}
