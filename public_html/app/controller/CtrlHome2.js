/* global app, calcMD5*/
var webservice = "https://ws.bios.inf.br/";
//var webservice = "http://localhost:8080/wsbios/";
var codeleicao = 6;
app.controller("CtrlHome", function ($scope, $http, $state) {
    $scope.objVO0448 = {"chave": null, "ip": null, "token": null, "votos": null};
    $scope.periodoEleicao = false;
    $scope.eleitorValido = 0;
    $scope.avisoResultado = false;
    $scope.dataResultado;
    $scope.ip;
    $scope.alterarSenha = false;

    $scope.AlterarSenha = function () {
        $scope.alterarSenha = true;
    };

    $scope.VoltarLogin = function () {
        $scope.alterarSenha = false;
    };

    if ((sessionStorage.getItem('objVO0448') != undefined)) {
        $scope.objVO0448 = JSON.parse(sessionStorage.getItem("objVO0448"));
    }

    MeuIp = function () {
        $http.get('meuip.php').then(function (retorno) {
            $scope.ip = retorno.data;
        }, function () {
            $scope.ip = "0.0.0.1";
        });
    };

    $scope.Logar = function () {
        $scope.objVO0418.cpf = $scope.objVO0418.cpf.replace(/[^\d]+/g, '');
        var senha = "";
        if ($scope.loginExterno) {
            senha = $scope.objVO0418.password1;
        } else {
            senha = calcMD5($scope.objVO0418.password1).toUpperCase();
        }
        var url = webservice + 'eleicao/logar?id1=' + $scope.objVO0418.cpf + '&id2=' + senha + '&id3=' + $scope.ip;
        $http.get(url).then(function (response) {
            $scope.objVO0448 = response.data;
            sessionStorage.setItem("objVO0448", JSON.stringify($scope.objVO0448));
            $scope.ValidaEleitor();
        }, function (response) {
            console.log(response);
        });
    };

    $scope.objVO0418 = {
        "codpessoa": null,
        "cpf": null,
        "dtnascimento": null,
        "password1": null,
        "password2": null
    };

    $scope.cadSenha = function () {
        $scope.objVO0418.cpf = $scope.objVO0418.cpf.replace(/[^\d]+/g, '');
        $scope.objVO0418.password1 = calcMD5($scope.objVO0418.password1).toUpperCase();
        $scope.objVO0418.password2 = calcMD5($scope.objVO0418.password2).toUpperCase();
        var strObjVO0418 = JSON.stringify($scope.objVO0418);
        $http({
            method: "POST",
            url: webservice + "eleicao/gravarsenha?id1=" + $scope.ip,
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },
            data: strObjVO0418
        }).then(function successCallback(response) {
            $scope.objVO0448 = response.data;
            sessionStorage.setItem("objVO0448", JSON.stringify($scope.objVO0448));
            $scope.ValidaEleitor();
        }, function errorCallback(response) {
            console.log(response);
        });
    };

    PeriodoEleicao = function () {
        var url = webservice + 'eleicao/verPeriodoEleicao?id1=' + codeleicao;
        $http.get(url).then(function (retorno) {
            if (retorno.data == 1) {
                $scope.periodoEleicao = true;
                $scope.GetParametros();
                sessionStorage.setItem('periodoEleicao', $scope.periodoEleicao);
            } else {
                sessionStorage.setItem('periodoEleicao', $scope.periodoEleicao);
            }
        }, function (error) {
            console.log(error);
        });
    };

    $scope.ValidaEleitor = function () {
        var url = webservice + 'eleicao/validaEleitor?id1=' + $scope.objVO0448.chave + '&id2=' + $scope.objVO0448.ip + '&id3=' + $scope.objVO0448.token + '&id4=' + codeleicao;
        $http.get(url).then(function (retorno) {
            $scope.eleitorValido = retorno.data;
            sessionStorage.setItem('eleitorValido', $scope.eleitorValido);
            if ($scope.periodoEleicao && $scope.eleitorValido == 1) {
                $state.go('votacao', {}, {reload: true});
            } else {
                $scope.alertaLogin = true;
            }

        }, function (error) {
            console.log(error);
        });
    };

    $scope.AbrirResultado = function () {
        var url = webservice + 'eleicao/dataresultado?id1=' + codeleicao;
        $http.get(url).then(function (retorno) {
            $scope.dataResultado = retorno.data;
            if (retorno.data == "") {
                $state.go('resultado', {}, {reload: true});
            } else {
                $scope.dataResultado = retorno.data;   
            $scope.avisoResultado = true;
            }
        }, function (error) {
            console.log(error);
        });
    };
    $scope.loginExterno = false;
    $scope.GetParametros = function () {
        try {
            var variaveis = location.search.split("?");
            var quebra = variaveis[1].split("=");
            var quebra1 = quebra[1].split("&");
            $scope.objVO0418.cpf = quebra1[0];
            $scope.objVO0418.password1 = quebra[2];
            $scope.loginExterno = true;
            $scope.Logar();
        } catch (e) {
        }
    };
    MeuIp();
    PeriodoEleicao();
});

