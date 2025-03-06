package com.example.ProjetoSpringWeb_HardWallet.dto;

public record ProdutoDTO( Long id,
                             String nome,
                             String marca,
                             Double preco,
                             Double desconto,
                             String imagem,
                             String imagem2,
                             String imagem3,
                             String descricao,
                             String conector,
                             String tamanho,
                             Integer quantidade,
                             boolean maisVendido,
                             boolean novidade,
                             boolean diy) {

}
