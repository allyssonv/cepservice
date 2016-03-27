(function () {
	'use strict';

angular.module('ConsultaCEP').directive('cep', function (CepService, $rootScope) { // $rootScope broadcast an event for listeners
	return {
		restrict: 'A',
		require: 'ngModel',
		link: function (scope, element, attr) {
			scope.$watch( attr.ngModel, function(value) { // $watch, listen model changes [attr.ngModel]

				if (value) {

					if (value.match(/[0-9]{8}/)) {
						CepService.get(value).then(function (response) { // Promise is treated here
							$rootScope.$broadcast('cep', response.data); // if success, return info, notify view
						}, function (err) {
							$rootScope.$broadcast('cep', err); // if err, return it, notify view
						});
					} else {
						// code go here
					}
				} 
			});
		}
	} 
});

})();