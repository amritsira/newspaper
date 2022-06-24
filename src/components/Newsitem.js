import React from 'react'

const Newsitem = ({ item }) => {
    return (
       
            <div className="card news-info" style={{width:"18rem"}}>
                <img src={item.image} className="card-img-top" alt={item.title} />
                    <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text">{item.description}</p>
                        {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                    </div>
            </div>
        
    )
}

export default Newsitem