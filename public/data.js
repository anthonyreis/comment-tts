(function (){

    const form = document.querySelector('form')
    const comment = document.querySelector('textarea')
    const response = document.querySelector('.comentarios')
    
    //Envia o formulário
    function sendForm(event){
        event.preventDefault()
        const ajax = new XMLHttpRequest();
        let params='comment='+comment.value;
        ajax.open('POST','/add');
        ajax.setRequestHeader('Content-type','application/x-www-form-urlencoded');
      
        if(Object.keys(comment.value).length > 1){
            //alert('teste')
            $('#comentarios').append("<li class='comment'>"+comment.value+"</li>")
            $('#comentarios').append('<a href="/ouvir/"<button class="btn btn-secondary btn-sm btnOuvir">Ouvir</button></a></li>')
            window.location.href = '/'
        } else {
            alert('Comentário vazio')
        }
        
        ajax.send(params);
    }

    form.addEventListener('submit',sendForm,false)

});