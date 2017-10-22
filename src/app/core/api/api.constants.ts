import {environment} from '../../../environments/environment';

export const APIS = {
    usuario: {
        login: {
            method: 'post',
            url: `${environment.host}usuario/login`,
            isPublic: true
        },
        relogin: {
            method: 'get',
            url: `${environment.host}usuario/relogin`
        },
        cadastrar: {
            method: 'post',
            url: `${environment.host}usuario/cadastrar`,
            isPublic: true
        }
    },
    cliente: {
        selecionar: {
            method: 'get',
            url: `${environment.host}cliente`
        },
        selecionarPorId: {
            method: 'get',
            url: `${environment.host}cliente/:id`
        },
        atualizar: {
            method: 'put',
            url: `${environment.host}cliente/:id`
        }
    },
    cep: {
        selecionar: {
            method: 'get',
            url: 'https://viacep.com.br/ws/:cep/json/',
            isPublic: true
        }
    },
    editora: {
        selecionar: {
            method: 'get',
            url: `${environment.host}editora`
        },
        selecionarSimples: {
            method: 'get',
            url: `${environment.host}editora-simples`
        },
        selecionarPorId: {
            method: 'get',
            url: `${environment.host}editora/:id`
        },
        inserir: {
            method: 'post',
            url: `${environment.host}editora`
        },
        atualizar: {
            method: 'put',
            url: `${environment.host}editora/:id`
        },
        remover: {
            method: 'delete',
            url: `${environment.host}editora/:id`
        }
    },
    autor: {
        selecionar: {
            method: 'get',
            url: `${environment.host}autor`
        },
        selecionarSimples: {
            method: 'get',
            url: `${environment.host}autor-simples`
        },
        selecionarPorId: {
            method: 'get',
            url: `${environment.host}autor/:id`
        },
        inserir: {
            method: 'post',
            url: `${environment.host}autor`
        },
        atualizar: {
            method: 'put',
            url: `${environment.host}autor/:id`
        },
        remover: {
            method: 'delete',
            url: `${environment.host}autor/:id`
        }
    },
    livro: {
        selecionar: {
            method: 'get',
            url: `${environment.host}livro`
        },
        selecionarPorId: {
            method: 'get',
            url: `${environment.host}livro/:id`
        },
        inserir: {
            method: 'post',
            url: `${environment.host}livro`
        },
        atualizar: {
            method: 'put',
            url: `${environment.host}livro/:id`
        },
        remover: {
            method: 'delete',
            url: `${environment.host}livro/:id`
        }
    },
    catalogo: {
        selecionar: {
            method: 'post',
            url: `${environment.host}selecionar-catalogo`
        },
        efetuarEmprestimo: {
            method: 'post',
            url: `${environment.host}catalogo/livro/:id/efetuar-emprestimo`
        },
    },
    emprestimo: {
        selecionarHistorico: {
            method: 'get',
            url: `${environment.host}historico-emprestimo`
        },
    },
};
