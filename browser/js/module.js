'use strict';

var juke = angular.module('juke', ['ui.router']);

juke.config(function ($stateProvider) {
  $stateProvider.state('albumList', {
    url: '/albums',
    controller: 'AlbumsCtrl',
    templateUrl: '/templates/allalbums.html' 
  })
  .state('artistList', {
  	url: '/artists',
  	controller: 'ArtistsCtrl',
  	templateUrl: '/templates/allartists.html'
  })
  .state('oneAlbum', {
  	url: '/album/:id',
  	controller: 'AlbumCtrl',
  	templateUrl: '/templates/onealbum.html'
  })
});

