
// var constr = (titulo, imagem, descricao) =>
//  {
//     this.titulo = titulo;
//     this.imagem = imagem;
//     this.descricao = descricao;
//  };

//  let titulo = document.querySelector('.title_card');
//  let coment = document.querySelector('.coment-box');
//  let image = document.querySelector('.url_imagem');

// const(titulo.value, coment.value,image.value)

let enviar = document.querySelector('.enviar');
let reset = document.querySelector('.reset');

enviar.addEventListener('click', a => {

    a.preventDefault();
    
    let titulo = document.querySelector('.title_card');
    let coment = document.querySelector('.coment-box');
    let image = document.querySelector('.url_imagem');

    // constr(titulo.value, coment.value, image.value);

    // constr.forEach(function(a) {
    
        const item = document.createElement('div');
        const img = document.createElement('img');
        const h2 = document.createElement('h2');
        const p = document.createElement('p');


        const h2Text = document.createTextNode(titulo.value);
        const pText = document.createTextNode(coment.value);

    
        img.setAttribute('src', image.value);
        h2.appendChild(h2Text);
        p.appendChild(pText);

        item.appendChild(img);
        item.appendChild(h2);
        item.appendChild(p);
        
        item.classList.add("item");

        document.querySelector('.container-main').appendChild(item);

        document.querySelector('form').reset();
});


