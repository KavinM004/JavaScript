const form = document.querySelector('form');
const userName = document.querySelector('#userName');
const eMail = document.querySelector('#eMail');
const course = document.querySelector("#course");
const radios = document.querySelectorAll("input[name='gender']");
const checkBox = document.querySelector("#checkBox");

form.addEventListener('submit', function(e){
    e.preventDefault();
    console.log(`Form sumbitted`);
    let gender = '';
    radios.forEach((e)=>{
        if(e.checked)       gender = e.value;
    });
    console.log(gender);
});
course.addEventListener('change', function(e){
    const selected = e.target.value;
    console.log(selected);
});
form.addEventListener('reset', function(e){
    console.log('resetted');
});
checkBox.addEventListener('change', function(e){
    if(e.target.checked){
        console.log('checked');
    }else{
        console.log('unchecked');
    }
});
userName.addEventListener('input', function(e){
    console.log(e.target.value);
});
userName.addEventListener('focus', function(e){
    userName.style.borderColor = 'orange';
});
userName.addEventListener("blur", function (e) {
  userName.style.borderColor = "blue";
});
