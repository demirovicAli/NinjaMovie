angular
  .module('ninja.najpopularniji')
  .filter('byGenre', function(){

    function filterByGenre(movies){
      var filtered = [];
      for(var i = 0; i < movies.length; i++) {
        if(movies[i].phone) {
          filtered.push(contacts[i]);
        }
      }
      return filtered;
    }

    return withPhoneFilter;
  });
