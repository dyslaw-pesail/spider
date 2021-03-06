System.register("UntilStatement", [], function() {
  "use strict";
  var __moduleName = "UntilStatement";
  function require(path) {
    return $traceurRuntime.require("UntilStatement", path);
  }
  "use strict";
  (function() {
    var Node = module.require("../Node").Node;
    function UntilStatement(test, body) {
      Node.call(this);
      this.type = "UntilStatement";
      this.test = test;
      this.test.parent = this;
      this.body = body;
      this.body.parent = this;
    }
    UntilStatement.prototype = Object.create(Node);
    UntilStatement.prototype.codegen = function() {
      if (!Node.prototype.codegen.call(this)) {
        return;
      }
      this.type = "WhileStatement";
      this.test = {
        "type": "UnaryExpression",
        "operator": "!",
        "argument": this.test.codegen(),
        "prefix": true
      };
      this.body = this.body.blockWrap().codegen();
      return this;
    };
    exports.UntilStatement = UntilStatement;
  }());
  return {};
});
System.get("UntilStatement" + '');
