package com.example.ProjetoSpringWeb_HardWallet.service;

import com.example.ProjetoSpringWeb_HardWallet.dto.ClienteDTO;
import com.example.ProjetoSpringWeb_HardWallet.model.Cliente;
import com.example.ProjetoSpringWeb_HardWallet.repository.ClienteRepository;
import com.example.ProjetoSpringWeb_HardWallet.repository.ProdutoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClienteService {
    @Autowired
    private ClienteRepository clienteRepository;


    public List<ClienteDTO> listaTodosClientes() {
        List<Cliente> clientes = clienteRepository.findAll();
        return clientes.stream().map(c -> new ClienteDTO(c.getId(), c.getNome(), c.getEmail(), c.getCpf(), c.getRg(), c.getTelefone(), c.getDataNascimento(), c.getCep(), c.getRua(), c.getNumero(), c.getCidade(), c.getBairro(), c.getEstado())).toList();
    }

    public ClienteDTO cadastraCliente(Cliente cliente) {
        Cliente novoCliente = clienteRepository.save(cliente);
        return new ClienteDTO(novoCliente.getId(), novoCliente.getNome(), novoCliente.getEmail(), novoCliente.getCpf(), novoCliente.getRg(), novoCliente.getTelefone(), novoCliente.getDataNascimento(), novoCliente.getCep(), novoCliente.getRua(), novoCliente.getNumero(), novoCliente.getCidade(), novoCliente.getBairro(), novoCliente.getEstado());
    }
}
