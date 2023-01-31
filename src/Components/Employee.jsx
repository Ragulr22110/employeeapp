import React from 'react'
import Navbar from './Navbar'

const Employee = () => {
  return (
    <div>
        <Navbar/>
        <div className="container">
            <form action="">
            <div className="row justify-content-center">
                <div className="border border-dark rounded bg-primary bg-opacity-10 p-5 g-4 col col-12 col-sm-12 col-md-8 col-lg-6 col-xl-6 col-xxl-6">
                    <div className="row g-4">

                        <h3 className='text-center text-primary'>Add Employee</h3>

                        <div className=" col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            
                            <label htmlFor="" className="form-label">Name</label>
                            <input type="text" className="form-control" placeholder='Enter Employee Name'/>

                        </div>

                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                            <label htmlFor="" className="form-label">Designation</label>
                            <input type="text" className="form-control" placeholder='Enter Employee Designatoin'/>

                        </div>

                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                            <label htmlFor="" className="form-label">Location</label>
                            <input type="text" className="form-control" placeholder='Enter Employee Location'/>

                        </div>

                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                            <label htmlFor="" className="form-label">Salary</label>
                            <input type="text" className="form-control" placeholder='Enter Employee Salary'/>

                        </div>

                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="mt-3 btn btn-primary">Submit</button>
                        </div>

                    </div>

                </div>
            </div>
           </form>
        </div>

      
    </div>
  )
}

export default Employee
