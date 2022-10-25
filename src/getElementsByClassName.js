// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {

  var result = [];

  var innerFunction = function(node) {
    if (node.classList && node.classList.contains(className)) {
      result.push(node);
    }
    if (!node.childNodes) {
      return;
    }
   var nodeList =  node.childNodes;
   for (var i = 0; i < nodeList.length; i++) {
    innerFunction(nodeList[i]);
   }
  }
  innerFunction(document.body);

  return result;

};

