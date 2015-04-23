;(function($) {
  'use strict';

  var people = [
    {'name': 'Colm', "skills": ['css', "javascript"]},
    {'name': 'Elisse', "skills": ['agile', "delivery"]},
    {'name': 'Juan', "skills": ['agile', "javascript"]}
  ];

  var tmpl = ['<div class="profile">',
    '<img src="http://placehold.it/100x100" class="profile__pic">',
    '<div class="profile__info">',
      '<h3 class="heading-normal profile__name">{{name}}</h3>',
      '<ul>',
        '<li>{{role}}</li>',
        '<li class="profile__team">{{team}}</li>',
      '</ul>',
    '</div>',
  '</div>'].join('\n');

  var performSearch = function( term ) {
    var result = _.findWhere(people, {'name': term});
    if (!result) {
      var term = term.toLowerCase() || "";
      result = _.filter(people, function(person) {
        return _.contains(person.skills, term);
      });
    }
    return result;
  };

  var renderProfile = function( person, $el ) {
    $(Mustache.to_html(tmpl, person)).appendTo( $el );
  };

  var renderSearchSummary = function( str, $el ) {
    $("<p></p>")
      .addClass( "search-results__summary" )
      .text( str )
      .prependTo( $el );
  };

  $(function() {
    var $peopleSearchResults = $(".people-search-results");

    var renderSearchResults = function( results ) {
      var summaryStr = "";
      $peopleSearchResults.empty();
      if( Array.isArray(results) ) {
        if( !results.length ) {
          // no results to display
          summaryStr = "no people found";
        } else {
          // display all results
          results.forEach(function(person, index) {
            renderProfile( person, $peopleSearchResults );
          });
          summaryStr = (results.length > 1 ) ? results.length + " people found" : "1 person found";
        }
      } else {
        // display single result
        renderProfile( results, $peopleSearchResults );
        summaryStr = "1 person found";
      }
      renderSearchSummary( summaryStr, $peopleSearchResults);
    };

    $("#people_search").on("change", function() {
      var entry = $(this).val();
      renderSearchResults( performSearch( entry ) );
    }).parents('form').on('submit', function(e) {
      e.preventDefault();
    });
  });

}(jQuery));
