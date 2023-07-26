import React, { useState } from 'react'
import { TbWorldSearch } from 'react-icons/tb';
import { GoLocation } from 'react-icons/go';

const Input = ({setQuery,units,setUnits}) => {
  const [city,setCity] = useState("")
  const handleSearchClick=()=>{
    if(city!==""){
      setQuery({q:city})
    }
  }
  // const handleLocationClick=()=>{
  //   if()
  // }

  const handleUnitChange =(e)=>{
    const selectedUnit = e.target.name;
    if(units!==selectedUnit){
      setUnits(selectedUnit)
    }
  }
  return (
    <div className='flex flex-row justify-center my6'>
      <div className='flex flex-row w-3/4 items-center justify-center space-x-4'>
   <input type='text' className='text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase' placeholder='Search for city....' value={city} onChange={(e)=>setCity(e.target.value)}/>
   < TbWorldSearch size={25} className='text-white cursor-pointer transition ease-out hover:scale-125' onClick={handleSearchClick}/>
   {/* <GoLocation size={25} className='text-white cursor-pointer transition ease-out hover:scale-125'/> */}
      </div>
      <div className='flex flex-row w-1/4 items-center justify-center'>
     <button name='metric' className='text-xl text-white font-light transition ease-out hover:scale-125' onClick={handleUnitChange}>°C</button>
     <p className='text-xl text-white mx-1'>|</p>
     <button name='imperial' className='text-xl text-white font-light transition ease-out hover:scale-125' onClick={handleUnitChange}>°F</button>
      </div>
    </div>
  )
}

export default Input
