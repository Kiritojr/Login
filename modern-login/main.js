let input_fields = document.querySelectorAll('input');

function change () {
  let user = document.querySelector('label');

    user.style.transform = 'translateY(-100%)';
    user.style = 'top: 0px';
    user.style.color = '#FF5858';
}

for (let i = 0; i < input_fields.length; i++) {
  let field = input_fields[i];
  field.addEventListener('input', function (e) {
    if (e.target.value != "") {
      e.target.parentNode.classList.add('has-content');
    } else if (e.target.value == "") {
      e.target.parentNode.classList.remove('has-content');
    }
  });
}
