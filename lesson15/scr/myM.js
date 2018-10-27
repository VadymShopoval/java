function myModule() {
  this.hello = function (params) {
    return 'hello';
  };
  this.goodbye = function () {
    return 'goodbye';
  };
}
module.exports = myModule();