package com.example.ProjetoSpringWeb_HardWallet.dto;

import java.time.LocalDate;

public record ClienteDTO( Long id,
                             String nome,
                             String email,
                             String cpf,
                             String rg,
                             String telefone,
                             String dataNascimento,
                             String cep,
                             String rua,
                             String numero,
                             String cidade,
                             String bairro,
                             String estado) {
}
