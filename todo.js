(function toDo(){

  var list = document.querySelector('#list'),
      form = document.querySelector('form'),
      item = document.querySelector('#item');

  form.addEventListener('submit',function(e){
    list.innerHTML += '<li>' + item.value + '</li>';
    store();
    item.value = "";
  },false)

  list.addEventListener('click',function(e){
    var t = e.target;
    if(t.classList.contains('checked')){
      t.parentNode.removeChild(t);
    } else {
      t.classList.add('checked');
    }
    store();
  },false)

  function store() {
    window.sessionStorage.myitems = list.innerHTML;
  }

  function getValues() {
    var storedValues = window.sessionStorage.myitems;
    if(!storedValues) {
      list.innerHTML
    }
    else {
      list.innerHTML = storedValues;
    }
  }
  getValues();
})();
