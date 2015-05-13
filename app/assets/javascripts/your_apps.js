;(function($) {
  'use strict';

  // on DOM ready
  $(function() {
    var $appsList = $(".apps__list");
    var $apps = $appsList.find(".app__container");
    var $filterBtns = $(".filter .button");

    var performFilter = function(status) {
      $apps.hide();
      $appsList.find("[data-jd-status='" + status  + "']").show();
    };

    $filterBtns.on("click", function(e) {
      $filterBtns.removeClass('active');
      $(this).addClass('active');
      performFilter($(this).data("status"));
    });
  });

}(jQuery));