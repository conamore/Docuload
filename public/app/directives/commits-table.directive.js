angular.module('githubProxy')
    .directive('commitsTable', function () {
        return {

            restrict: 'E',
            templateUrl: '/app/directives/commits-table.html',
            scope: {
                commits: '=commits',
            },
            link: function (scope) {
                scope.title = 'Something else';
            }
        };
    });