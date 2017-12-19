(function () {
    angular
        .module('app')
        .factory('AuthenticationService', AuthenticationService);
    AuthenticationService.$inject = ['$http', '$cookies', '$rootScope', '$timeout', 'UserService'];
    function AuthenticationService($http, $cookies, $rootScope, $timeout, UserService) {
        var service = {};
        service.Login = Login;
        service.SetCredentials = SetCredentials;
        service.ClearCredentials = ClearCredentials;
        return service;
        function Login(username, password, callback) {
            $http.post($rootScope.api_base_url + '/authenticate', {usrname: username, password: password})
                .success(function (response) {
                callback(response)
            });
        }
      function SetCredentials(username, password) {
            var authdata = {username: username,  password: password};
            $rootScope.globals = {
                currentUser: {
                    username: username,
                    authdata: authdata
                }
            };
            $http.defaults.headers.common['Authorization'] = authdata;

            var cookieExp = new Date();
            cookieExp.setDate(cookieExp.getDate() + 10);
            $cookies.putObject('globals', $rootScope.globals, { expires: cookieExp });
        }

        function ClearCredentials() {
            $rootScope.globals = {};
            $cookies.remove('globals');
            $http.defaults.headers.common.Authorization = '';
        }
    }
})();