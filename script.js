// Intro loader
window.addEventListener('load', function(){
  setTimeout(function(){
    document.getElementById('loader').classList.add('done');
  }, 2600);
});

function openModal(id){ document.getElementById(id).classList.add('active'); }
function closeModal(id){ document.getElementById(id).classList.remove('active'); }
document.querySelectorAll('.modal').forEach(function(m){
  m.addEventListener('click', function(e){ if(e.target === m) m.classList.remove('active'); });
});

// Mobile nav closes after clicking a link
document.querySelectorAll('#navMenu a').forEach(function(a){
  a.addEventListener('click', function(){ document.getElementById('navMenu').classList.remove('open'); });
});