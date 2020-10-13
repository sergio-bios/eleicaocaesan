var app = angular.module("Caesan", ["ui.router"]);
app.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'app/page_views/home.html',
                controller: 'CtrlHome'
            })
            .state('relacao-candidatos', {
                url: '/relacao-candidatos',
                templateUrl: 'app/page_views/relacao-candidatos.html',
                controller: 'CtrlRelacaoCandidatos'
            })
            .state('confirmacao', {
                url: '/confirmacao',
                templateUrl: 'app/page_views/confirmacao.html',
                controller: 'CtrlConfirmacao'
            })
            .state('votacao', {
                url: '/votacao',
                templateUrl: 'app/page_views/votacao.html',
                controller: 'CtrlVotacao'
            })
            .state('resultado', {
                url: '/resultado',
                templateUrl: 'app/page_views/resultado.html',
                controller: 'CtrlResultado'
            })
            .state('documentos-importantes', {
                url: '/documentos-importantes',
                templateUrl: 'app/page_views/documentos-importantes.html',
                controller: ''
            });
});

var objlstDeliberativo = [
    {
        "nome": "Carlos Tadeu Garrote",
        "id": "50",
        "voto": "false",
        "categoria": "*",
        "foto": 50,
        "curriculo": null,
        "sobre": null
    },
    {
        "nome": "Ana Cristina da Silva",
        "id": "49",
        "voto": "false",
        "categoria": "*",
        "foto": 49,
        "curriculo": null,
        "sobre": null
    },
    {
        "nome": "Roberto da Silva Ribeiro",
        "id": "51",
        "voto": "false",
        "categoria": "*",
        "foto": 51,
        "curriculo": null,
        "sobre": null
    },
    {
        "nome": "Rosimeire Dalat Coelho",
        "id": "52",
        "voto": "false",
        "categoria": "*",
        "foto": 52,
        "curriculo": null,
        "sobre": null
    }
];
var objlstFiscal = [{
        "nome": "Karine Cristiane Ferreira",
        "id": "46",
        "voto": "false",
        "categoria": "*",
        "foto": 46,
        "curriculo": null,
        "sobre": null
    },
    {
        "nome": "Sebastião Alves Rodrigues",
        "id": "48",
        "voto": "false",
        "categoria": "*",
        "foto": 48,
        "curriculo": null,
        "sobre": null
    },
    {
        "nome": "Romulo Alexander Silva Novaes",
        "id": "47",
        "voto": "false",
        "categoria": "*",
        "foto": 47,
        "curriculo": null,
        "sobre": null
    }
];