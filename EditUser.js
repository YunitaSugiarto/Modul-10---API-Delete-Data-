import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import swal from 'sweetalert'
  
class EditUser extends React.Component{
    constructor(){
        super()
        this.state={
            id : '',
            nama : '',
            alamat : '',
        }
    }

    componentDidMount = async () => {
        const id = this.props.match.params.id
        const res = await axios.get("http://localhost/reactapi/getUser.php?id="+ id)
        
        this.setState({
            id : res.data.id,
            nama : res.data.nama,
            alamat : res.data.alamat
        })
    }

    handleChange = (e) =>{
        this.setState({ [e.target.name] : e.target.value })
    }

    handleSubmit = async(e) => {
        e.preventDefault()
        console.log(this.state)
        await axios.post("http://localhost/reactapi/editUser.php", this.state)
        this.props.history.push('/user');
        swal("Good job!", "You have successfully edited data!", "success");
    }

    render(){
        const {id,nama,alamat} = this.state

        return(
            <div>
                <h5>Edit User</h5>
                <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label for="id">Id</label>
                    <input type="text" classname="form-control" name="id" value={id} onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <label for="nama">Nama</label>
                    <input type="text" classname="form-control" name="nama" value={nama} onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <label for="alamat">Alamat</label>
                    <input type="text" classname="form-control" name="alamat" value={alamat} onChange={this.handleChange} />
                </div>
                <button type="submit" className="btn btn-dark">Submit</button>
                </form>
            </div>
        )
    }
}

export default EditUser