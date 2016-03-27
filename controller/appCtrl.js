(function () {

	'use strict';

	var app = angular.module('ConsultaCEP', []);

	app.controller('mainCtrl', function ($scope, $rootScope) {
		$scope.hello = 'Informe o CEP';

	// receive notification
	$rootScope.$on('cep', function(event, data) {

		// cep not found
		if (data.status == 404) {
			$scope.exibeaviso = true;
			$scope.erro = data.statusText;

		}
		else {
			$scope.logradouro = data.logradouro;
			$scope.bairro = data.bairro;
			$scope.cidade = data.cidade+'/'+data.estado;
			$scope.estado = data.estado_info.nome;
			$scope.exibeaviso = false;
		}
	});
});

	app.controller('headCtrl', function ($scope) {
		$scope.title = 'CEP app';
	});

})();