// tables

const consts = {
    'geral':{
        'form': document.getElementById('form'),
        'user': document.getElementById('username'),
        'mail': document.getElementById('email'),
        'password': document.getElementById('password'),
        'check': document.getElementById('password-check'),
    },
};

// click

consts['geral']['form'].addEventListener('submit',
    (e) => {
        e.preventDefault();

        checkInputs();
    }
);

// function form

checkInputs = function(){
    const userValue = consts['geral']['user'].value.trim();
    const mailValue = consts['geral']['mail'].value.trim();
    const passwordValue = consts['geral']['password'].value.trim();
    const checkValue = consts['geral']['check'].value.trim();

    if(userValue === ''){
        setAddBox(consts['geral']['user'], '* Insira um nome de usuario.', 'error');
    }else{
        setAddBox(consts['geral']['user']);
    }

    if(mailValue === ''){
        setAddBox(consts['geral']['mail'], '* Insira um email.', 'error');
    }else if(!getEmail(mailValue)){
        setAddBox(consts['geral']['mail'], '* Email invalido.', 'error');
    }else{
        setAddBox(consts['geral']['mail']);
    }

    if(passwordValue === ''){
        setAddBox(consts['geral']['password'], '* Insira uma senha', 'error');
    }else{
        setAddBox(consts['geral']['password']);
    }

    if(checkValue === ''){
        setAddBox(consts['geral']['check'], '* Insira uma senha', 'error');
    }else if(checkValue !== passwordValue){
        setAddBox(consts['geral']['check'], '* As senhas não coincidem.', 'error');
        setAddBox(consts['geral']['password'], '* As senhas não coincidem.', 'error');
    }else{
        setAddBox(consts['geral']['check']);
    }
};

// infobox

setAddBox = function(input, msg, type){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    small.innerText = msg;

    if(type == 'error'){
        formControl.className = 'form-control ' + type;
    }else if(type == 'success'){
        formControl.className = 'form-control ' + type;
    }else{
        formControl.className = 'form-control success';
    }
};

// util's

getEmail = function(email){
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
};