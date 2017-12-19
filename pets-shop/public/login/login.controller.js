(function () {
    angular
        .module('app')
        .controller('LoginController', LoginController);
    LoginController.$inject = ['$location', 'AuthenticationService', 'FlashService'];
    function LoginController($location, AuthenticationService, PetsService, FlashService) {
        var vm = this;
        vm.login = login;
        vm.dataLoading = false;
        (function initController() {
            AuthenticationService.ClearCredentials();
        })();
        function login() {
            AuthenticationService.Login(vm.username, vm.password, function (response) {
                if(response.success) {
                    AuthenticationService.SetCredentials(vm.username, vm.password);
                    $location.path('/');
                } else {
                    FlashService.Error(response.message);
                    vm.dataLoading = false;
                }
            });
        };
    }
})();