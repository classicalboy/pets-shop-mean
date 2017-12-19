(function () {
    angular
        .module('app')
        .factory('UserService', UserService);
    UserService.$inject = ['$http'];
    function UserService($http) {
        var service = {};
        service.GetByUsername = GetByUsername;
        service.Create = Create;
        service.Update = Update;
        return service;

        function GetByUsername(username) {
            return $http.get('/users/' + username).then(handleSuccess, handleError('Error getting user by username'));
        }

        function Create(user) {
            return $http.post('/users', user).then(handleSuccess, handleError('Error creating user'));
        }

        function Update(data) {
            return $http.put('/api/users/', data).then(handleSuccess, handleError('Error updating user'));
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
