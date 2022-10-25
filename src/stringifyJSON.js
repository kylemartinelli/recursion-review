// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  var result = '';

   // checking for string
   if(typeof obj === 'string') {
    result += '"' + obj + '"'
  } if (typeof obj === 'number' || obj === null || typeof obj === 'boolean') {
    result += obj;
  }

  //checking for arrays
  if(Array.isArray(obj)) {
    result += '[';
    if(obj.length !== 0) {
      obj.forEach(function(item) {
      result += stringifyJSON(item) + ',';
    })
      result = result.slice(0, result.length - 1)
    }
    result += ']'
  }

  //checking for object
  if(typeof obj === 'object' && obj !== null && !Array.isArray(obj)) {
    result += '{';
    if(Object.keys(obj).length !== 0 ) {
      for(key in obj) {
        if(typeof obj[key] !== 'function' && obj[key] !== undefined) {
          result += '"' + key + '":' + stringifyJSON(obj[key]) + ','
        }
      }
      if (result.length !== 1) {
        result = result.slice(0, result.length - 1);
      }
    }
    result+= '}'

  }

  



  return result;
