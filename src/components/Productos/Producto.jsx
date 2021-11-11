import React from "react";
import { Fragment } from "react";

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
function Producto({ item }) {
  const { id, nombre, descripcion, precio, imagen } = item;
  
  return (
    <Fragment>
      <div class="col-md-4">
        <div class="card mt-3">
          <div class="product-1 align-items-center p-2 text-center">
            <img src={imagen} alt={nombre} class="rounded" width="80%" />
            <h5>{nombre}</h5>

            <div class="mt-3 info">
              <p class="text1 d-block">{descripcion}.</p>

              <div class="cost m-3 text-dark fw-bold">
                <span>S/{precio}</span>
              </div>
              <div>
                <Link  to={`${id}` } className="btn btn-info">
                Comprar
                </Link>
                <Link  to="/carrito" className="btn btn-success mx-2 m-md-2" onClick={()=>{
                  console.log({id})}}>
                Agregar al Carrito
                </Link>
                
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
export default Producto