import React from 'react'

 const Singup = () => {
  return (
     <>
     <section className='signup'>
        <div className='container mt-5'>
            <div className='singup-content'>
                <div className='signup-form'>
                  <h2 className='form-title'>sign up</h2>
             <form className='register-form' id='register-form'>

      <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">
    <i class="zmdi zmdi-name"></i>Name</label>
    <input type="text" className="form-control" id="exampleInputEmail1" autoComplete='off'
      placeholder='Enter your Name' 
    />
 
  </div>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">
    <i class="zmdi zmdi-email"></i>Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" autoComplete='off'
      placeholder='Enter your email Id' 
    />
 
  </div>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">
    <i class="zmdi zmdi-phone-in-talk"></i>Phone Number</label>
    <input type="number" className="form-control" id="exampleInputEmail1" autoComplete='off'
      placeholder='Enter your Phone number' 
    />
 
  </div>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">
    <i class="zmdi zmdi-slideshow"></i>Work</label>
    <input type="email" className="form-control" id="exampleInputEmail1" autoComplete='off'
      placeholder='Enter your Work' 
    />
 
  </div>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">
    <i class="zmdi zmdi-lock"></i>Password</label>
    <input type="password" className="form-control" id="exampleInputEmail1" autoComplete='off'
      placeholder='Enter your password' 
    />
  </div>

  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">
    <i class="zmdi zmdi-lock"></i>Confirm Password</label>
    <input type="password" className="form-control" id="exampleInputEmail1" autoComplete='off'
      placeholder='Enter your password' 
    />
  </div>
  
  <button type="submit" class="btn btn-primary">Register</button>
                  </form>
                </div>
            </div>
        </div>
     </section>
     </>
  )
}
export default Singup;