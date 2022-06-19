import React, { Component } from 'react'
import { Link } from "react-router-dom"

class SearchBar extends Component {


    handleFormSubmit = (event) => {
        event.preventDefault();

    }

    render() {
        return (
            <form onSubmit={this.handleFormSubmit}>
                <div className=' form-row row mb-5 mt-5 '>
                    <div className='col-10'>
                        <input onChange={this.props.searhMovieProp} type="text" className='form-control' placeholder='Movie Search' />
                    </div>
                    <div className='col-2'>
                        <Link to="add">  <button type='button'
                            className='btn  btn-danger'
                            style={{ float: "right" }}>Add Movie
                        </button></Link>
                    </div>
                </div>
            </form>

        )
    }
}
export default SearchBar;
