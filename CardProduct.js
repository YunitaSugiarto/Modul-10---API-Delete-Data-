import React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import swal from 'sweetalert'
 
function CardProduct({product, refresh}){

  async function deleteProduct(){
    swal({
      title: "Are you sure?",
      text: "Once deleted, data (" + product.product_name + ") will not be able to recover!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then(async (willDelete) => {
      if (willDelete) {
        swal("data (" + product.product_name + ") has been deleted!", {icon: "success",});
    await axios.delete("http://localhost/reactapi/deleteProduct.php?product_id=" + product.product_id)

    return refresh()
  } else {
    swal("data (" + product.product_name +") is safe!");
  }
});}
  return(
    <tr>
    <th scope="row">{product.product_id}</th>
    <th scope="row">{product.product_name}</th>
    <th scope="row">{product.product_price}</th>
    <th scope="row">{ <Link className="btn btn-dark" to={'/editProduct/' + product.product_id}>Edit</Link> }
    {<button type="button" class="btn btn-dark" onClick={deleteProduct}>Delete</button>}</th>
    </tr>
  )
}

export default CardProduct
