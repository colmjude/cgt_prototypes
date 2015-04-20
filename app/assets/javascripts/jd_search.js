;(function($) {
  'use strict';

  // if hash value, fetch and decode
  var hash = (window.location.hash !== "") ?  decodeURIComponent(window.location.hash.substr(1)) : "";

  // on DOM ready
  $(function() {
    var $searchInput = $("#jd_search");
    var $jdResults = $(".jd__results");
    var $skillItems = $(".skill");

    console.log($skillItems);

    $jdResults.find(".jd__listing").hide();

    var displaySkillSearchResults = function(skill) {
      $searchInput.val(skill);
      $skillItems.removeClass("skill--highlighted");
      $("[data-skill='" + skill + "']")
        .addClass("skill--highlighted")
        .parents(".jd__listing")
          .show();
    };

    var updateSkillSearch = function(skill) {
      // update hash and encode
      window.location.hash = encodeURIComponent(skill);
      // update input & display results
      $jdResults.find(".jd__listing").hide();
      displaySkillSearchResults(skill);
    };

    if(hash) {
      displaySkillSearchResults(hash);
    }

    $skillItems.on('click', function(e) {
      updateSkillSearch($(this).data('skill'));
    });
  });

}(jQuery));