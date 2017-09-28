/*
* @Author: Administrator
* @Date:   2017-09-28 11:06:23
* @Last Modified by:   Administrator
* @Last Modified time: 2017-09-28 11:15:06
*/

'use strict';

const STOREKEY = "vue-todo"


export default{
  fetch : function(){
   return JSON.parse(window.localStorage.getItem(STOREKEY));

},
  save : function(items){
   window.localStorage.setItem(STOREKEY,JSON.stringify(items));
}

}
