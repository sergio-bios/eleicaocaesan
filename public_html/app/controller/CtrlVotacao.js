/* global app, objlstDeliberativo, objlstFiscal */

app.controller("CtrlVotacao", function ($scope,$state) {    
    if(true){
        $scope.lstDeliberativo = objlstDeliberativo;
        $scope.lstFiscal = objlstFiscal;

        if (JSON.parse(sessionStorage.getItem('lstVotadosFiscal')) == undefined) {
            $scope.votadosDeliberativo = [];
        } else {
            $scope.votadosDeliberativo = JSON.parse(sessionStorage.getItem('lstVotadosDeliberativo'));
        }

        $scope.limiteVotosDeliberativo = 1;

        if (sessionStorage.getItem('nvotosDeliberativo') == undefined) {
            $scope.nvotosDeliberativo = 0;
            console.log("teste");
        } else {
            $scope.nvotosDeliberativo = sessionStorage.getItem('nvotosDeliberativo');
        }

        $scope.gerarVotosDeliberativo = function (dados) {
            if (dados.voto == true) {
                $scope.nvotosDeliberativo++;
                $scope.votadosDeliberativo.push(dados);
            } else {
                $scope.nvotosDeliberativo--;
                for (var i = 0; i < $scope.votadosDeliberativo.length; i++) {
                    if ($scope.votadosDeliberativo[i].id == dados.id) {
                        $scope.votadosDeliberativo.splice(i, 1);
                    }
                }
            }
        };

        if (JSON.parse(sessionStorage.getItem('lstVotadosFiscal')) == undefined) {
            $scope.votadosFiscal = [];
        } else {
            $scope.votadosFiscal = JSON.parse(sessionStorage.getItem('lstVotadosFiscal'));
        }

        if (sessionStorage.getItem('nvotosFiscal') == undefined) {
            $scope.nvotosFiscal = 0;
        } else {
            $scope.nvotosFiscal = sessionStorage.getItem('nvotosFiscal');
        }

        $scope.limiteVotosFiscal = 1;

        $scope.gerarVotosFiscal = function (dado) {
            if (dado.voto == true) {
                $scope.nvotosFiscal++;
                $scope.votadosFiscal.push(dado);
            } else {
                $scope.nvotosFiscal--;
                for (var i = 0; i < $scope.votadosFiscal.length; i++) {
                    if ($scope.votadosFiscal[i].id == dado.id) {
                        $scope.votadosFiscal.splice(i, 1);
                    }
                }
            }
        };

        $scope.confirmarVotos = function () {
            sessionStorage.setItem('lstVotadosDeliberativo', JSON.stringify($scope.votadosDeliberativo));
            sessionStorage.setItem('lstVotadosFiscal', JSON.stringify($scope.votadosFiscal));
            sessionStorage.setItem('nvotosFiscal', $scope.nvotosFiscal);
            sessionStorage.setItem('nvotosDeliberativo', $scope.nvotosDeliberativo);
        };
    }else{
        $state.go('home', {}, {reload: true});
    }
});