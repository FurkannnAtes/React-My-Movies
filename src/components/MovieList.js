import React from 'react'
import "./MovieList.css"


function MovieList(props) {

    return (
        <div>
            <div className='row'>

                {props.movies.map((movie) => (

                    <div className=' col-sm-6 col-md-4 col-lg-3' key={movie.id}>
                        <div className='card mb-4 shadow-sm  ' >
                            <a href='#s' className='m-link ' data-bs-toggle="modal">
                                <div className='m-hover'>
                                    <div className='mh-content '>
                                        <i className="m-plus bi bi-plus-lg "></i>
                                    </div>
                                </div>
                                <img src={movie.imgURL} className='card-img-top' alt='Sample Movie' />
                            </a>
                            <div className='card-body '>
                                <h5 className='card-title'>{movie.name}</h5>
                                <p className='card-text'>{movie.overview}</p>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <button onClick={(event) => props.deleteMovieProp(movie)} type='button' className='btn btn-md btn-outline-danger'>Delete</button>

                                    <h2><span className='badge bg-info'>{movie.rating}</span></h2>
                                </div>
                            </div>

                        </div>


                    </div>




                ))}



            </div>







        </div>
    )
}


export default MovieList;
