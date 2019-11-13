import React from 'react'
import axios from 'axios'
import CardProduct from './CardProduct'
import {Link } from 'react-router-dom'

class Product extends React.Component{
  constructor(){
    super()
    this.state = {
      product : []
    }
  }

  componentDidMount = async () =>{
    await axios.get("http://localhost/reactapi/product.php")
    .then(response=>this.setState({
        product: response.data
      }))
      console.log(this.state)
  }

  render(){
    const renderData = this.state.product.map( product=>{
    return(
        <CardProduct product={product} key={product.product_id} refresh={this.componentDidMount}/>
    ) 
  })
  return(
    <div>
      <h5>Data Product</h5>
      <table className='table'>
      <thead className='thead-dark'>
        <tr>
          <th scope='col'>Product Id</th>
          <th scope='col'>Product Name</th>
          <th scope='col'>Product Price</th>
          <th scope='col'>Action</th>
        </tr>
      </thead>
    <tbody>
      {renderData}
    </tbody>
    </table>
      <Link className="btn btn-dark" to={'/addProduct'}>Tambah Product</Link>
    </div>
  )
}
}

export default Product
