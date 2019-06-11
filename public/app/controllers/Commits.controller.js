angular.module('githubProxy')
    .controller('Commits', function (commitsService) {
        this.searchPattern = '';
        var ctrl = this;
        this.searchClicked = function (event) {
        	commitsService.search(this.searchPattern).then(function (commits) {
                ctrl.commits = commits;
            });
        	/*commitsService.get(this.searchPattern).then(function (users) {
                ctrl.users = users;
            });*/
        };

    });