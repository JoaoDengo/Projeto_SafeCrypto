package com.example.ProjetoSpringWeb_HardWallet.repository;

import com.example.ProjetoSpringWeb_HardWallet.model.Produto;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ProdutoRepository extends JpaRepository<Produto, Long> {
    List<Produto> findAll();

    @Modifying
    @Transactional
    @Query("UPDATE Produto p SET p.quantidade = :quantidade WHERE p.nome LIKE %:nomeProduto%")
    void updateQuantidadeProduto(@Param("quantidade") int quantidade, @Param("nomeProduto") String nomeProduto);

    @Modifying
    @Transactional
    @Query("UPDATE Produto p SET p.quantidade = 1 WHERE p.id = :produtoId")
    void inicializaQtdProduto(@Param("produtoId") Long produtoId);

}
