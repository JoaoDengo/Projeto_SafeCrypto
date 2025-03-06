package com.example.ProjetoSpringWeb_HardWallet.dto;

import com.example.ProjetoSpringWeb_HardWallet.model.ItemCarrinho;

import java.util.List;

public record CarrinhoDTO(Long id, List<ItemCarrinhoDTO> itensCarrinho) {
}
