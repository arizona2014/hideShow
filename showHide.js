'use strict';

angular.module('showHide', [])
.directive("showHide", function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            element.css('display', 'none');
        }
    }
});
