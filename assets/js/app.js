var portfolio = angular.module('portfolio',['ui.router']);

// App State Configuration
portfolio.config(function ($stateProvider, $urlRouterProvider) {

    var aboutState = {
        name : 'about',
        controller: 'aboutController',
        url : '/',
        templateUrl : 'assets/partials/about.html'
    }

    var experienceState = {
        name : 'experience',
        controller: 'experienceController',
        url : '/experience',
        templateUrl : 'assets/partials/experience.html'
    }

    var educationState = {
        name : 'education',
        controller: 'educationController',
        url : '/education',
        templateUrl : 'assets/partials/education.html'
    }
    
    var skillsState = {
        name : 'skills',
        controller: 'skillsController',
        url : '/skills',
        templateUrl : 'assets/partials/skills.html'
    }
    
    var activitiesState = {
        name : 'activities',
        controller: 'activitiesController',
        url : '/activities',
        templateUrl : 'assets/partials/activities.html'
    }

    var achievementsState = {
        name : 'achievements',
        controller: 'achievementsController',
        url : '/achievements',
        templateUrl : 'assets/partials/achievements.html'
    }

    var projectState = {
        name : 'projects',
        controller : 'projectsController',
        url : '/projects',
        templateUrl : 'assets/partials/projects.html'
    }

    $stateProvider.state(aboutState);
    $stateProvider.state(experienceState);
    $stateProvider.state(educationState);
    $stateProvider.state(skillsState);
    $stateProvider.state(activitiesState);
    $stateProvider.state(achievementsState);
    $stateProvider.state(projectState);
    $urlRouterProvider.otherwise('/');
})