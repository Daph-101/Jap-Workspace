const CATEGORIES_URL = "https://japdevdep.github.io/ecommerce-api/category/all.json";
const PUBLISH_PRODUCT_URL = "https://japdevdep.github.io/ecommerce-api/product/publish.json";
const CATEGORY_INFO_URL = "https://japdevdep.github.io/ecommerce-api/category/1234.json";
const PRODUCTS_URL = "https://japdevdep.github.io/ecommerce-api/product/all.json";
const PRODUCT_INFO_URL = "https://japdevdep.github.io/ecommerce-api/product/5678.json";
const PRODUCT_INFO_COMMENTS_URL = "https://japdevdep.github.io/ecommerce-api/product/5678-comments.json";
const CART_INFO_URL = "https://japdevdep.github.io/ecommerce-api/cart/654.json";
const CART_BUY_URL = "https://japdevdep.github.io/ecommerce-api/cart/buy.json";
//
//
//
var URL_C_Onix ='https://daph-101.github.io/Apis-JaP/C_Onix.json'
var URL_Fiat = 'https://daph-101.github.io/Apis-JaP/Fiat.json'
var URL_Peugeot = 'https://daph-101.github.io/Apis-JaP/Peugeot.json'
var URL_Suzuki = 'https://daph-101.github.io/Apis-JaP/Suzuki.json'


var showSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "block";
}

var hideSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "none";
}

var getJSONData = function(url){
    var result = {};
    showSpinner();
    return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }else{
        throw Error(response.statusText);
      }
    })
    .then(function(response) {
          result.status = 'ok';
          result.data = response;
          hideSpinner();
          return result;
    })
    .catch(function(error) {
        result.status = 'error';
        result.data = error;
        hideSpinner();
        return result;
    });
}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {
  let correeo = localStorage.getItem('Correo');
  let infoUser = document.getElementById("info-user")
  let user = document.getElementById("user");

  if (correeo) {
    correeo = JSON.parse(correeo);
    user.innerText = user.innerText + correeo.email;
    infoUser.style = "display: inline-block";
  }

  if (document.getElementById("salir")) {
    document.getElementById("salir").addEventListener("click", function () {
      localStorage.removeItem('Correo');
      window.location = 'login.html';
    })
  }
 
 
});