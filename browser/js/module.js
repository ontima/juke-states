'use strict';

var juke = angular.module('juke', ['ui.router']);

juke.config(function ($stateProvider) {
  $stateProvider.state('albumList', {
    url: '/albums',
    controller: 'AlbumsCtrl',
    templateUrl: '/templates/allalbums.html',
    resolve: {
      albums: function(AlbumFactory) {
        return AlbumFactory.fetchAll();
      }
    }
  })
  .state('artistList', {
  	url: '/artists',
  	controller: 'ArtistsCtrl',
  	templateUrl: '/templates/allartists.html',
    resolve: {
      artists: function(ArtistFactory) {
        return ArtistFactory.fetchAll();
      }
    }
  })
  .state('oneAlbum', {
  	url: '/album/:id',
  	controller: 'AlbumCtrl',
  	templateUrl: '/templates/onealbum.html',
    resolve: {
      album: function(AlbumFactory, $stateParams) {
        return AlbumFactory.fetchById($stateParams.id);
      }
    }
  })
  .state('oneArtist', {
    url: '/artist/:id',
    controller: 'ArtistCtrl',
    templateUrl: '/templates/oneartist.html',
    resolve: {
      artist: function(ArtistFactory, $stateParams) {
        return ArtistFactory.fetchById($stateParams.id);
      }
    }
  })
  .state('oneArtist.albums', {
    url: '/artist/:id/albums',
    controller: 'ArtistCtrl',
    templateUrl: '/templates/oneartistalbums.html',
    resolve: {
      artist: function(ArtistFactory, $stateParams) {
        return ArtistFactory.fetchById($stateParams.id);
      }
    }   
  })
  .state('oneArtist.songs', {
    url: '/artist/:id/songs',
    controller: 'ArtistCtrl',
    templateUrl: '/templates/oneartistsongs.html',
    resolve: {
      artist: function(ArtistFactory, $stateParams) {
        return ArtistFactory.fetchById($stateParams.id);
      }
    }
  })
});

