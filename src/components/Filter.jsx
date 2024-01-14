import React from 'react'
import {statusOptions} from '../data/data.js';

const Filter = ({filter, setFilter, setOrder}) => {
  return (
    <div className='filter'>
      <h2>Filtrar:</h2>
      <div className='filter-options'>
        <div>
          <p>Status:</p>
          <select value={filter} onChange={(e) => {
            console.log("target: ", e.target.value)
            setFilter(e.target.value)
          }}>
          { 
            statusOptions.map ((item) => 
              (
                <option key={item.value} value={item.value}> {item.title} </option>
              )
            )
          }
          </select>
        </div>
        <div className='filter-order'>
          <p>Ordem Alfabética:</p>
          <button onClick={()=>{setOrder('Asc')}}>Asc</button>
          <button onClick={()=>{setOrder('Desc')}}>Desc</button>
        </div>
      </div>
    </div>
  )
}

export default Filter