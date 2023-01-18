import React, {useState} from 'react';
import data from "../data/Data";
import "./search.css";
// import {useNavigate} from "react-router-dom"

const Search = () => {
  // const navigate = useNavigate()
    const [filter, setFilter] = useState('')
    const searchText = (event) =>{
        setFilter(event.target.value)
    }
    const dataSearch = data.cardData.filter(item => {
        return Object.keys(item).some(key => item[key].toString().toLowerCase().includes(filter.toString().toLowerCase()))
    })

  return (
    <section>
      <div className="py-4 container">
        <div className="row justify-content-center">

            <div className="col-12 mb-5">
                <div className="mb-3 col-4 mx-auto text-center search-component">
                    <label className='form-label h4'>Search</label>
                    <input type="text" className="form-control" value={filter} onChange={searchText.bind(this)} />
                </div>
            </div>
           {dataSearch.map((item, index) =>{
            return(
                 <div key={index} className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
                <div className="card p-0 overflow-hidden h-100 shadow cardgroup">
                    <img src={item.img} alt="" className="card-img-top card-img"  />
                    <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text">{item.desc}</p>
                        <button >
                          <a style={{textDecoration: "none", border: "none", outlineStyle: "none"}} className='card-btn' href={item.path}>{item.button}</a>
                        </button>
                    </div>
                </div>
            </div>
            )
           })}
        </div>
      </div>
    </section>
  )
}

export default Search
