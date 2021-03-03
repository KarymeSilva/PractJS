import React, {Component} from 'react';

class ComponentePrueba extends Component {



    render(){

        var receta={
            nombre:'Pizza',
            ingredientes:['Tomate','Queso','Jamon',],
            calorias:400
        
        };

        return(

            <React.Fragment>
   <h1>Estoy en el compoenente de prueba</h1>
        <h2>Este es otro mensaje</h2>
        <h3>El alimento se llama {receta.nombre}</h3>
        <ol>

            {
                receta.ingredientes.map((ingrediente,i)=>{
                    return(
                        <li>{ingrediente}</li>
                    );
                })
            }
        </ol>

            </React.Fragment>
           
            
            );
    }
}

export default ComponentePrueba;