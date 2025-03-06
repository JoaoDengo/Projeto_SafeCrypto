package com.example.ProjetoSpringWeb_HardWallet.model;

import jakarta.persistence.*;

@Entity
@Table(name = "produtos")
public class Produto {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "nome", length = 255)
    private String nome;

    @Column(name = "marca", length = 255)
    private String marca;

    @Column(name = "preco")
    private Double preco;

    @Column(name = "desconto")
    private Double desconto;

    @Column(name = "imagem", length = 500)
    private String imagem;

    @Column(name = "imagem2", length = 500)
    private String imagem2;

    @Column(name = "imagem3", length = 500)
    private String imagem3;

    @Column(name = "descricao", columnDefinition = "TEXT")
    private String descricao;

    @Column(name = "conector", length = 100)
    private String conector;

    @Column(name = "tamanho", length = 100)
    private String tamanho;

    @Column(name = "quantidade")
    private Integer quantidade;

    @Column(name = "mais_vendido")
    private Boolean maisVendido;

    @Column(name = "novidade")
    private Boolean novidade;

    @Column(name = "diy")
    private Boolean diy;

    public Double getDesconto() {
        return desconto;
    }

    public void setDesconto(Double desconto) {
        this.desconto = desconto;
    }

    public boolean isMaisVendido() {
        return maisVendido;
    }

    public void setMaisVendido(boolean maisVendido) {
        this.maisVendido = maisVendido;
    }

    public boolean isNovidade() {
        return novidade;
    }

    public void setNovidade(boolean novidade) {
        this.novidade = novidade;
    }

    public boolean isDiy() {
        return diy;
    }

    public void setDiy(boolean diy) {
        this.diy = diy;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getMarca() {
        return marca;
    }

    public void setMarca(String marca) {
        this.marca = marca;
    }

    public Double getPreco() {
        return preco;
    }

    public void setPreco(Double preco) {
        this.preco = preco;
    }

    public String getImagem() {
        return imagem;
    }

    public void setImagem(String imagem) {
        this.imagem = imagem;
    }

    public String getImagem2() {
        return imagem2;
    }

    public void setImagem2(String imagem2) {
        this.imagem2 = imagem2;
    }

    public String getImagem3() {
        return imagem3;
    }

    public void setImagem3(String imagem3) {
        this.imagem3 = imagem3;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public String getConector() {
        return conector;
    }

    public void setConector(String conector) {
        this.conector = conector;
    }

    public String getTamanho() {
        return tamanho;
    }

    public void setTamanho(String tamanho) {
        this.tamanho = tamanho;
    }

    public Integer getQuantidade() {
        return quantidade;
    }

    public void setQuantidade(Integer quantidade) {
        this.quantidade = quantidade;
    }

    public Boolean getMaisVendido() {
        return maisVendido;
    }

    public void setMaisVendido(Boolean maisVendido) {
        this.maisVendido = maisVendido;
    }

    public Boolean getNovidade() {
        return novidade;
    }

    public void setNovidade(Boolean novidade) {
        this.novidade = novidade;
    }

    public Boolean getDiy() {
        return diy;
    }

    public void setDiy(Boolean diy) {
        this.diy = diy;
    }
}
