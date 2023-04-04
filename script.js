const handleSubmit = (event) => {
    event.preventDefault();
  
    const Nome = document.querySelector('input[name=nome]').value;
    const Email = document.querySelector('input[name=email]').value;
    const Mensagem = document.querySelector('input[name=mensagem]').value;
    var data = new Date();
    // var data = d.toDateString();
    
    fetch('https://api.sheetmonkey.io/form/uFT383dLZxfft4HbVYUbTT',{
  
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({Nome, Email, Mensagem, data: data.toDateString()})
    }).then(() => alert('Enviado'));
    
  }
  
  document.querySelector('form').addEventListener('btn btn-primary', handleSubmit);

//   https://docs.google.com/spreadsheets/d/1dH2kpove_SftX23mpgN8kvzdkNUHn7vsC9Zwz8qbyB0/edit?usp=sharing


// const myModal = document.getElementById('myModal')
// const myInput = document.getElementById('myInput')

// myModal.addEventListener('shown.bs.modal', () => {
//   myInput.focus()
// })