/* global app, objlstDeliberativo, objlstFiscal */

app.controller("CtrlRelacaoCandidatos", function ($scope){
    $scope.lstDeliberativo = objlstDeliberativo;
    $scope.lstFiscal = objlstFiscal;
});