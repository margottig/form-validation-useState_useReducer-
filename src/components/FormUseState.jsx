import React, {useState} from 'react'

const FormUseState = () => {
    
    const [getNombre, setNombre] = useState("Escribe algo en el campo de entrada Nombre");
    const [getApellido, setApellido] = useState("");
    const [getEmail, setEmail] = useState("");
    const [getPassword, setPassword] = useState("");
    const [getConfirmPass, setConfirmPass] = useState("");

    const crearUsuario = (evento) =>{
        evento.preventDefault();
        console.log(evento.target);
    }


  return (
    <>
    <form onSubmit={crearUsuario}>
    <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Nombre</label>
        <input onChange={(evento) => setNombre(evento.target.value)} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        {/* validar campo nombre */}
        {(getNombre.length < 3 && getNombre !== "" ) ? <p className='text-danger'>Nombre debe tener mas de 3 caracteres</p> : null}
    </div>
    <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Apellido</label>
        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        
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
        <label htmlFor="exampleInputPassword1" className="form-label">Confirmar Password</label>
        <input type="password" className="form-control" id="exampleInputPassword1"/>
    </div>
    
    <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    <div>
        <p>Nombre: {getNombre}</p>
        <p>Apellido:</p>
        <p>Email:</p>
        <p>Password:</p>
        <p>Confirm Pasword: </p>
    </div>
</>
  )
}

export default FormUseState