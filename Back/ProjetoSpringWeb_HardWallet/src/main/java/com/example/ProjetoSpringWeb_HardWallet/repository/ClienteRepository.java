package com.example.ProjetoSpringWeb_HardWallet.repository;

import com.example.ProjetoSpringWeb_HardWallet.model.Cliente;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ClienteRepository extends JpaRepository<Cliente, Long> {
    List<Cliente> findAll();
}
