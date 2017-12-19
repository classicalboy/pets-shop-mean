(function () {
    angular
        .module('app')
        .factory('PetsService', PetsService);
    PetsService.$inject = ['$http'];
    function PetsService($http) {
        var service = {};
        service.GetAll = GetAll;
        return service;

        function GetAll() {
            return $http.get('/pets/').then(handleSuccess, handleError('Error getting user by username'));
        }
        
        function handleSuccess(res) {
            return res.data;
        }

        function handleError(error) {
            return function () {
                return { success: false, message: error };
            };
        }
    }

})();
