const btnLoad = document.querySelector('.btn-load');
const btnSave = document.querySelector('.btn-save');
const textarea = document.querySelector('textarea');

console.log(btnLoad, btnSave, textarea);

btnSave.addEventListener('click', function() {
   //console.log(textarea.value);

   localStorage.setItem('tekst', textarea.value);
});

btnLoad.addEventListener('click', function(e) {
   if (localStorage.getItem('tekst').length > 0) {
      console.log(localStorage.getItem('tekst'));

      textarea.value = localStorage.getItem('tekst');
      //textarea.value = 'na chama';
   }
});
