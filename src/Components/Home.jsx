import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import Navbar from './Navbar';

const Home = () => {

    var [Employee,setEmployee] = useState([]);

    useEffect(
        ()=>{
            employeeData();
        },[]
    )

    const employeeData = ()=>{
               axios.get("https://jsonplaceholder.typicode.com/users")
               .then(
                (response)=>{
                   
                    setEmployee(response.data)
                }
            )
            .catch()
    }

    



  return (
    <div>

      <Navbar/>

      <div className="container-fluid">
        <div className="row">
            <h3 className='text-center text-primary mt-4'>Employee Dashboard</h3>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row ">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table table-striped table-bordered table-hover">
                        <thead>
                            <tr className='bg-primary bg-opacity-50'>
                            <th scope="col" className='text-center'>Id</th>
                            <th scope="col" className='text-center'>Name</th>
                            <th scope="col" className='text-center'>Email</th>
                            
                            </tr>
                        </thead>
                        <tbody>

                 {Employee.map(
                    (item,key)=>{
                                return <tr className='bg-primary bg-opacity-10'>
                                        <td className='text-center'>{item.id}</td>
                                        <td class=''>{item.name}</td>
                                        <td>{item.email}</td>
                                        </tr>
                                        }
                                    )}
                             </tbody>
                            </table>
                        </div>
                 
                   </div>
    </div>
        </div>
    </div>


    </div>
  )}

export default Home