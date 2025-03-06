package com.example.ProjetoSpringWeb_HardWallet.repository;

import com.example.ProjetoSpringWeb_HardWallet.dto.CarrinhoDTO;
import com.example.ProjetoSpringWeb_HardWallet.model.Carrinho;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface CarrinhoRepository extends JpaRepository<Carrinho, Long> {
    List<Carrinho> findAll();

    @Query("select SUM(p.preco * i.quantidade) from ItemCarrinho i join Produto p on p.id = i.produto.id")
    Double sumTotalCarrinho();

    @Modifying
    @Transactional
    @Query("DELETE FROM ItemCarrinho i WHERE i.produto.nome LIKE %:nomeProduto%")
    void deleteProduto(@Param("nomeProduto") String nomeProduto);

    @Modifying
    @Transactional
    @Query("UPDATE ItemCarrinho i SET i.quantidade = :quantidade WHERE i.produto.nome LIKE %:nomeProduto%")
    void updateQuantidadeItemCarrinho(@Param("quantidade") int quantidade, @Param("nomeProduto") String nomeProduto);


}
