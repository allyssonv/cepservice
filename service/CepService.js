(function () {
  
  'use strict';

  angular.module('ConsultaCEP').service('CepService', function ($http) {
    this.get = function (cep) {
    return $http.get('http://api.postmon.com.br/v1/cep/'+ cep); // return Promise
  }

});


})();
