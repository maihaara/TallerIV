import React from 'react'

function Singnup (){
    return(
        <div style={{ backgroundColor: 'maroon', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div className='bg-white p-3 rounded w-25'>
                <h2>Registrarse</h2> 
                <form >
                    <div className='mb-3' >
                        <label htmlFor='name'><strong>Nombre y Apellido</strong></label>
                        <input type="text" placeholder='Ingrese el nombre y apellido' name='name'  className='form-control rounded-0' ></input>

                    </div>
                    <div className='mb-3'>
                    <label htmlFor='correo'><strong>Correo</strong></label>
                        <input type="text" placeholder='Ingrese Correo' name='correo'  className='form-control rounded-0'></input>

                    </div>
                    <div className='mb-3'>
                    <label htmlFor='password'><strong>Clave</strong></label>
                        <input type="password" placeholder='Ingrese la contraseña' name='Enter password'  className='form-control rounded-0'></input>


                    </div>
                    <button type='submit' className='btn btn-danger w-100 rounded-0'> Sign up</button>
                    <div style={{ margin: '10px 0' }}></div>

                    <button type='submit' className='btn btn-default border w-100 rounded-0' style={{ backgroundColor: 'lightcoral', color: 'white' }}>Login</button>



                </form>

            </div>

            
        </div>
    )
}


export default Singnup