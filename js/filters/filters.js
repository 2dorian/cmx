angular.module('appFilters', []).filter('checkmark', function() {   // checkmark is the filter name //
  return function(input) {
    return input ? '\u2713' : '\u2718';    // Haken oder Kreuz bei true/false statements //
  };
});