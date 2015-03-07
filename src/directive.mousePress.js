/*
< ab-mouse-press onDown="f()" onUp="f()" cb="f()" int="1000" >
*/

'use strict';

(function(angular) {

  angular
    .module('ab.mouse.press')
    .directive('abMousePress', Directive);

  function Directive() {
    return {
      restrict: 'EA',
      scope: {
        cb: '=',
        int: '=',
      },
      transclude: true,
      link: Link,
      controller: 'MousePressCtrl',
      controllerAs: 'mouse',
      bindToController: true
    }
  }

  function Link(scope, element, attributes, controller, transclude) {

    var promise;

    if (!controller.cb) {
      controller.int = false;
    }

    transclude(scope, function(dom) {
      element.append(dom);
    })

    element.on('click', function() {
      controller.cb && controller.cb();
    })

    element.on('mousedown', function() {
      controller.press();
    })

    element.on('mouseup', function() {
      controller.release();
    })

    element.bind('mouseleave', function(e) {
      controller.release();
    })
  }

}(angular));