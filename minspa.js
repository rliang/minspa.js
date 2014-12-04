(function() {
  'use strict';
  this.minspa = function(host) {
    var curr;
    return function(node) {
      if (!(node instanceof Node)) {
        var d = document.createElement('div');
        d.innerHTML = node;
        node = d;
      }
      if (curr) {
        host.removeChild(curr);
      }
      host.appendChild(curr = node);
    };
  };
}).call(this);
