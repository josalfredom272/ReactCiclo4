import React from "react"

const actualizacion = () => {

  return (

    <section className="vh- 100">
      <div className="container">
        <form className="mt-4">
          <div className="form-group row">
            <div className="form-group col-md-1">
              <label for="inputEmail4">Fecha</label>
            </div>
            <div className="form-group col-md-5">
              <input type="email" className="form-control" id="inputEmail4" />
            </div>
            <div className="form-group col-md-2">
              <label for="password">Hora</label>

            </div>
            <div className="form-group col-md-4">
              <select id="password" className="form-control form-select-sm mb-2 custom-select" aria-label=".form-select-lg example">
                <option selected value="1">00:00</option>
                <option selected value="1">10:00</option>
                <option selected value="1">15:00</option>
                <option selected value="1">20:00</option>
              </select>
            </div>
          </div>
          <div className="form-group row col-md-10">
            <label for="inputState">Estado</label>
            <select id="inputState" className="form-control form-select-sm mb-2 custom-select" aria-label=".form-select-lg example">
              <option selected value="1">Guardado</option>
              <option value="2">Sin actualizar</option>
            </select>
          </div>

          <div className="form-row">
            <div className="form-group col-md-3">
              <label for="inputCity">Largo</label>
              <input type="text" className="form-control" id="inputCity" />
            </div>
            <div className="form-group col-md-3">
              <label for="inputZip">Largo</label>
              <input type="text" className="form-control" id="inputZip" />
            </div>
            <div className="form-group col-md-3">
              <label for="inputZip">Alto</label>
              <input type="text" className="form-control" id="inputZip" />
            </div>
            <div className="form-group col-md-3">
              <label for="inputZip">Peso</label>
              <input type="text" className="form-control" id="inputZip" />
            </div>
          </div>

          <div className="form-group row">
            <label for="inputPassword3" className="col-sm-3 col-form-label">Direccion recogida</label>
            <div className="col-sm-9">
              <input type="password" className="form-control" id="inputPassword3" />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-3 col-form-label">Ciudad de recogida</label>
            <div className="col-sm-9">
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-3 col-form-label">Nombre destinatario</label>
            <div className="col-sm-9">
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-3 col-form-label">Cedula/Nit         destinatario</label>
            <div className="col-sm-9">
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-3 col-form-label">Direccion entrega</label>
            <div className="col-sm-9">
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-3 col-form-label">Ciudad entrega</label>
            <div className="col-sm-9">
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="form-group row">
            <div className="col-sm-6 ">
              <button type="submit" className="btn btn-primary">Actualizar Orden</button>
            </div>
          </div>
                </form>
     </div>
        </section >
        
} 
 
        export default actualizacion