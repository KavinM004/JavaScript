const textInput = document.getElementById('textInput');

textInput.addEventListener('keyup', function(e){
    debopt();
});

let count = 0;
const dataInAPI = () =>{
    count++;
    console.log(`From API.., ${count} `)
};

const debounceMethod = function( fun, search){
    let timer;
    return function(){
        clearTimeout(timer);
        timer = setTimeout(() => {
            fun.apply( this, arguments);
        }, search);
    };
};

const debopt = debounceMethod(dataInAPI, 2000);
