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
};
