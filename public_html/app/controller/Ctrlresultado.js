/* global app */
var webservice = "https://ws.bios.inf.br/";
//var webservice = "http://localhost:8080/wsbios/";
var codeleicao = 6;
app.controller("CtrlResultado", function($scope, $http){
    $scope.lstResultadoEleicao;
    resultadoEleicao = function () {
        var url = webservice + 'eleicao/resultadoEleicao?id1=' + codeleicao;
        $http.get(url).then(function (retorno) {
            $scope.lstResultadoEleicao = retorno.data;           
        }, function (error) {
            console.log(error);
        });
    };
    resultadoEleicao();
});