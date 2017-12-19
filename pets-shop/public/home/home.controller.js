(function () {
    'use strict';
    
    angular
        .module('app')
        .controller("HomeController", HomeController);
    
    HomeController.$inject = ["UserService", "PetsService", "$rootScope"];
    
    function HomeController (UserService, $rootScope) {
        var vm = this;
        
        vm.user = null;
        vm.pets = [];
        vm.addPet = addPet;
        
        initController();
        
        function initController () {
            loadCurrentUser();
            loadAllPets();
        }
        
        function loadCurrentUser () {
            UserService.GetByUsername($rootScope.globals.currentUser.name)
                .then(function (user) {
                vm.user = user;
            });
        }
        
        function loadAllPets () {
            PetsService.GetAll()
                .then (function (allPets) {
                vm.pets = allPets;
            });
        }
        
        function addPet(data) {
            //{user: user,pet: pet}
            UserService.Update(data)
                .then(function () {
                loadAllPets();
            });
        }
    }
})();