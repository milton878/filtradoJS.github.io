
//variables:


const botonesCategorias = document.querySelectorAll('.btn-info')

const resultado = document.querySelector('#resultado');


document.addEventListener('DOMContentLoaded', ()=>{
    cargarProductos(productos);
})


function cargarProductos(productosElegidos){
    //vaciar el contenedor
   resultado.innerHTML = '';
   //recorre el arreglo de prod y los muestra
    productosElegidos.forEach(producto =>{
         const { img, title, description, categoria, precio}= producto;
         const cascoHTML = document.createElement('div');
                //cascoHTML.classList.add("producto");
            cascoHTML.innerHTML=`
             <div class="card" style="width: 15rem"; >
                  <img src="${img}" class="card-img-top" alt="...">
                  <div class="card-body">
                     <h5 class="card-title">${title}</h5>
                    
                     <p class="card-text">${categoria}</p>
                     <p class="card-text">$${precio}</p>


                     <a href="#" class="btn btn-primary">Comprar</a>
                  </div>
                </div>
        
        `;
        resultado.appendChild(cascoHTML);
    })
}

botonesCategorias.forEach(boton =>{
    boton.addEventListener('click', (e)=>{
       // console.log('hola..')

       //2-filtro el boton todos
       if(e.currentTarget.id != "todos"){
        //filtro por categoria 
       const productosBoton = productos.filter(producto => producto.categoria === e.currentTarget.id)
       cargarProductos(productosBoton);
       }else{
        cargarProductos(productos);
       }


       
    })
})


