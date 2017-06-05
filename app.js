var app = angular.module('portfolio', []);

app.controller('mainController', [function(){
  this.show = 'about';
  this.project = 'battleship'

  this.showSelect = function(show){
    this.show = show;
  };

  this.showProject = function(project){
    this.project = project;
  }

}]);
