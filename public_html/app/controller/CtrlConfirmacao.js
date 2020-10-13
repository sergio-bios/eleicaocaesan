/* global app*/
var webservice = "https://ws.bios.inf.br/";
//var webservice = "http://localhost:8080/wsbios/";
var codeleicao = 6;
app.controller("CtrlConfirmacao", function ($scope, $http, $state, $timeout) {
    if (true) {
        $scope.votoComputado = false;
        $scope.lstVotadosDeliberativo = JSON.parse(sessionStorage.getItem('lstVotadosDeliberativo'));
        $scope.lstVotadosFiscal = JSON.parse(sessionStorage.getItem('lstVotadosFiscal'));

        $scope.gravarVotos = function () {
            $scope.lstvotos = [];
            for (var i = 0; i < $scope.lstVotadosDeliberativo.length; i++) {
                $scope.lstvotos.push($scope.lstVotadosDeliberativo[i].id);
            }
            for (var i = 0; i < $scope.lstVotadosFiscal.length; i++) {
                $scope.lstvotos.push($scope.lstVotadosFiscal[i].id);
            }

            $scope.objVO0448 = JSON.parse(sessionStorage.getItem("objVO0448"));
            $scope.objVO0448.votos = $scope.lstvotos;
            var strObjVO0448 = JSON.stringify($scope.objVO0448);

            $http.post(webservice + 'eleicao/votar?id1=' + codeleicao, strObjVO0448).then(function (retorno) {
                $scope.votoComputado = true;
                $timeout(function () {
                    sessionStorage.removeItem('lstVotadosDeliberativo');
                    sessionStorage.removeItem('lstVotadosFiscal');
                    sessionStorage.removeItem('nvotosFiscal');
                    sessionStorage.removeItem('nvotosDeliberativo');
                    window.open('https://eleicao.caesan.com.br/', '_self');
                }, 5000);
            }, function (error) {
                console.log(error);
            });
        };
        gravarVoto = function () {
            $scope.objVO0448 = JSON.parse(sessionStorage.getItem("objVO0448"));
            var strObjVO0407 = JSON.stringify($scope.objVO0407);

            $http.post(webservice + 'eleicao/votar?id1=' + codeleicao, strObjVO0407).success(function (data) {

            }).error(function () {

            });
        };
    } else {
        $state.go('home', {}, {reload: true});
    }
});