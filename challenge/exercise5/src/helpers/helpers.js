export default {
  // group an array by key and returns an object containing percentage for each group
  // ex: groupByKey([{color: 'blue'}, {color: 'green'}, {color: 'blue'}, {color: 'blue'}], 'color')  =>  {blue: 0.75, green: 0.25}
  groupByKey(array, key) {
    /*
      reduce the input array to an object where each key will represent each unique key from the input array
      and value will be all occurences of the unique key
      e.g.
      {blue:[{color:'blue'}, {color:blue}],
      green:[...]}
     */
    const result = array.reduce((hash, obj) => {
      return Object.assign(hash, {[obj[key]]: ( hash[obj[key]] || [] ).concat(obj)});
    }, {});
    /*
      map over the result and change the occurences to a percentage
     */
    Object.keys(result).map(function(key) {
      result[key] = (result[key].length / array.length);
    });
    return result;
  },
  // get the value of an object at a given dotted path
  // ex: getValueAtPath({my: {dotted: {path: 123}}}, 'my.dotted.path')  =>  123
  getValueAtPath(obj, path, defaultValue='none') {
    /*
      split path by '.' and map over each stage replacing current values to return final value
     */
    path.split('.').map(function(current) {
      obj = obj[current];
    });
    return obj;
  },
};
