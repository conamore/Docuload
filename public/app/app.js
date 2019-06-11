
angular.module('githubProxy', ['ngRoute'])
    .config(function($routeProvider){
        $routeProvider.when('/users/:id', {
        	bindToController: true,
            controller: 'Users',
            templateUrl: '/app/controllers/users.view.html',
            controllerAs: 'ctrl'
        }).when('/', {
        	bindToController: true,
            controller: 'Commits',
            templateUrl: '/app/controllers/commits.view.html',
            controllerAs: 'ctrl'
        /*}).when('/', {
        	bindToController: true,
            controller: 'Main',
            templateUrl: '/app/controllers/main.html',
            controllerAs: 'ctrl'*/
        });

    });
