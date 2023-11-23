import React from 'react'

function Singnup (){
    return(
        <div className='d-flex w-100 vh-100 bg-primary justify-content-center align-items-center'>
            <div className='bg-white p-3 rounded w-25'>
                <h2>Registrarse</h2> 
                <form>
                    <div className='mb-3'>
                        <label htmlFor='name'><strong>Nombre y Apellido</strong></label>
                        <input type="text" placeholder='Enter Name' name='name'  className='form-control rounded-0'></input>

                    </div>
                    <div className='mb-3'>
                    <label htmlFor='correo'><strong>Correo</strong></label>
                        <input type="text" placeholder='Enter Correo' name='correo'  className='form-control rounded-0'></input>

                    </div>
                    <div className='mb-3'>
                    <label htmlFor='password'><strong>Clave</strong></label>
                        <input type="password" placeholder='Ingrese la contraseña' name='Enter password'  className='form-control rounded-0'></input>


                    </div>
                    <button type='submit' className='btn btn-success w-100 rounded-0'> Sign up</button>



                </form>

            </div>

            
        </div>
    )
}


export default Singnup