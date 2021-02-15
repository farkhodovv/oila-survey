import Vue from 'vue';

Vue.prototype.$phoneNumber = function (number){
  let thisPhone = number.replaceAll(/\D/g, "")
  return thisPhone.replace(/^(\d{2})(\d{3})(\d{2})(\d{2})/, '$1$2$3$4')
  //return number.toString().replace(/\B(?=(\d{4})+(?!\d))/g, " ");
}
