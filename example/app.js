'use strict';

(function(angular) {
  angular
    .module('app', [
      'ab.mouse.press'
    ])
    .controller('MainCtrl', Controller);

  Controller.$inject = [];

  function Controller() {

    var vm = this;

    vm.value = 0;
    vm.increment = increment;

    function increment() {
      vm.value = vm.value + 1;
    }
  }
}(angular));
