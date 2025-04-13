import React from 'react'
import Table from '../components/Table'
import Navbar from "../components/layout/Navbar"
function GetMovie() {
  return (
    <div className='container py-6 mx-auto'>
      <Navbar></Navbar>
      <Table></Table>
    </div>
  )
}

export default GetMovie