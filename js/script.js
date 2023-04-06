$(document).ready(function(){

$('#tel').mask('(00) 00000-0000', {
    placeholder: '(__) _____-____'
})

    
$('#cpf').mask('000.000.000-00', { 
        reverse: true,
        placeholder: '___.___.___-__'
})

$('#cep').mask('00000-000', { 
        placeholder: '_______-__'
    })


$('form').validate({
    rules: {
        nome: {
            required: true
        },
        email: {
            required: true,
            email: true

        }, 
        tel: {
            required: true
        },
        cpf: {
            required: true
        },
        endereco: {
            required: true
        },
        cep: {
            required: true
        },
    },
    messages: {
        nome: 'Por favor, preencha seu nome'
    },
    submitHandler: function(form){
        form.submit()
    }

    
});


})