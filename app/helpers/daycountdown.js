import Ember from 'ember';

export function daycountdown([time]) {
let endtime =  time;
let t = Date.parse(endtime) - Date.parse(new Date());
let days = Math.floor( t/(1000*60*60*24) );



  return days;
}

export default Ember.Helper.helper(daycountdown);
 

 

//   var t = Date.parse(endtime) - Date.parse(new Date());
//   var days = Math.floor( t/(1000*60*60*24) );
//   return {
//     'total': t,
//     'days': days,
//   };
// }
