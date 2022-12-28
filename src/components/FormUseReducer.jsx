import React, {useReducer} from 'react'

const FormUseReducer = () => {
    
    const initialState = {
        firstName: {
            value: '',
            error: null
            },
            lastName: {
            value: '',
            error: null
            },
            email: {
            value: '',
            error: null
            }
    };
    
    const [state, dispatch] = useReducer(formReducer, initialState)

    function formReducer(state, action){
        let errorAux = null;
        if(action.type == "firstName" && action.payload.length < 3 && action.payload.length > 0  ) errorAux = "Nombre debe tener mas de 3 caracteres";
        
        if(action.type == "lastName" && action.payload.length < 3  && action.payload.length > 0) errorAux = "Apellido debe tener mas de 3 caracteres";
    
        return {
            ...state,
            [action.type] : { value:action.payload, error: errorAux}
        }
    }

    function adminForm(evento) {
        const {name, value} = evento.target
        dispatch({
            type:name,
            payload: value
        });
    }

  return (
    <>
    <form >
    <div className="mb-3">
        <label htmlFor="exampleInputNombre" className="form-label">Nombre</label>
        <input onChange={adminForm} type="text" name="firstName" className="form-control" id="exampleInputNombre" aria-describedby="emailHelp"/>
        {state.firstName.error !== null && (<p className="text-danger">{state.firstName.error}</p>)}

    </div>
    <div className="mb-3">
        <label htmlFor="exampleInpuApellido" className="form-label">Apellido</label>
        <input type="text" className="form-control" id="exampleInpuApellido" aria-describedby="emailHelp"/>
        
    </div>
    <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        
    </div>
    <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
        <input type="password" className="form-control" id="exampleInputPassword1"/>
    </div>
    <div className="mb-3">
        <label htmlFor="exampleInputPassword2" className="form-label">Confirmar Password</label>
        <input type="password" className="form-control" id="exampleInputPassword2"/>
    </div>
    
    <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    <div>
        <p>Nombre: </p>
        <p>Apellido:</p>
        <p>Email:</p>
        <p>Password:</p>
        <p>Confirm Pasword: </p>
    </div>
</>
  )
}

export default FormUseReducer