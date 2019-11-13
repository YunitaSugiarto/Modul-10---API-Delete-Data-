import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import swal from 'sweetalert'
  
class EditProduct extends React.Component{
    constructor(){
        super()
        this.state={
            product_id : '',
            product_name : '',
            product_price : '',
        }
    }

    componentDidMount = async () => {
        const product_id = this.props.match.params.product_id
        const res = await axios.get("http://localhost/reactapi/getProduct.php?product_id="+product_id)
        
        this.setState({
            product_id : res.data.product_id,
            product_name : res.data.product_name,
            product_price : res.data.product_name
        })
    }

    handleChange = (e) =>{
        this.setState({ [e.target.name] : e.target.value })
    }

    handleSubmit = async(e) => {
        e.preventDefault()
        console.log(this.state)
        await axios.post("http://localhost/reactapi/editProduct.php", this.state)
        this.props.history.push('/product');
        swal("Good job!", "You have successfully edited data!", "success");
    }

    render(){
        const {product_id,product_name,product_price} = this.state

        return(
            <div>
                <h5>Edit Product</h5>
                <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label for="product_id">Product Id</label>
                    <input type="text" classname="form-control" name="product_id" value={product_id} onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <label for="product_name">Product Name</label>
                    <input type="text" classname="form-control" name="product_name" value={product_name} onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <label for="product_price">Product Price</label>
                    <input type="text" classname="form-control" name="product_price" value={product_price} onChange={this.handleChange} />
                </div>
                <button type="submit" className="btn btn-dark">Submit</button>
                </form>
            </div>
        )
    }
}

export default EditProduct