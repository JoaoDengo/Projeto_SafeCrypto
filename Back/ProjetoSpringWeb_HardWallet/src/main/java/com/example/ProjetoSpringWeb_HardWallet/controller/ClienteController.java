package com.example.ProjetoSpringWeb_HardWallet.controller;

import com.example.ProjetoSpringWeb_HardWallet.dto.ClienteDTO;
import com.example.ProjetoSpringWeb_HardWallet.model.Cliente;
import com.example.ProjetoSpringWeb_HardWallet.service.ClienteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ClienteController {
    @Autowired
    private ClienteService clienteService;

    @PostMapping("/main/usuarios")
    public ClienteDTO adicionarCliente(@RequestBody Cliente cliente){
        return clienteService.cadastraCliente(cliente);
    }

    @GetMapping("/main/usuarios")
    public List<ClienteDTO> listarClientes(){
        return clienteService.listaTodosClientes();
    }

}
