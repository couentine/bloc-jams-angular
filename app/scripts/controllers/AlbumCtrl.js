 (function() {
     function AlbumCtrl() {
         this.AlbumData = angular.copy(albumPicasso)
     }
 
     angular
         .module('blocJams')
         .controller('AlbumCtrl', AlbumCtrl);
 })();