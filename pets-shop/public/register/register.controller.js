(function () {
    angular
        .module('app')
        .controller('RegisterController', RegisterController);
    
    RegisterController.$inject = ['UserService', '$location', '$rootScope', 'FlashService'];
    
    function RegisterController(UserService, $location, $rootScope, FlashService) {
        var vm = this;
        
        vm.register = register;
        
        function register() {
            UserService.Create(vm.user)
                .then(function (response) {
                    if(response.success) {
                        FlashService.Success('Registration Successful', true);
                        $location.path('/login');
                    } else {
                        FlashService.Error(response.message);
                    }
            });
        }
    }
})();