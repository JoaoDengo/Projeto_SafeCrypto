package com.example.ProjetoSpringWeb_HardWallet.model;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "carrinho")
public class Carrinho {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToMany (fetch = FetchType.EAGER, cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonManagedReference
    private List<ItemCarrinho> itensCarrinho = new ArrayList<>();

    public void addItemCarrinho(ItemCarrinho item){
        this.itensCarrinho.add(item);
        item.setCarrinho(this);
    }

    public void removeItemCarrinho(ItemCarrinho item) {
        if (this.itensCarrinho != null) {
            this.itensCarrinho.remove(item);
            item.setCarrinho(null);
        }
    }

    public Carrinho() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public List<ItemCarrinho> getItensCarrinho() {
        return itensCarrinho;
    }

    public void setItensCarrinho(List<ItemCarrinho> itensCarrinho) {
        this.itensCarrinho = itensCarrinho;
    }
}
