'use strict';

(function(angular) {

  angular
    .module('ab.mouse.press')
    .controller('MousePressCtrl', Controller);

  Controller.$inject = ['$interval'];

  function Controller($interval) {
    var vm = this;
    var promise;

    vm.isPressed = false;
    vm.press = press;
    vm.release = release;

    function press() {
      if (vm.int) {
        promise = $interval(vm.cb, vm.int);
      }
      vm.isPressed = true;
    }

    function release() {
      if (vm.isPressed) {
        $interval.cancel(promise);
        vm.isPressed = false;
      }
    }
  }

}(angular));