import React, { useEffect, useState } from 'react'
import './Calculator.css'

const Calculaor = () => {

  const [height,setHeight]=useState(170)
  const [weight,setWeight]=useState(60)
  
 
  const getBmi=(height,weight)=>{
    const heightMeters=height/100 
    const bmi=weight/heightMeters
    return bmi.toFixed(2)
  }

  

  useEffect(()=>{
    document.title=`Attica Gold:${getBmi(height,weight)}`
  })
  return (
    

    <div>
        <h1> Attica Pan Masala </h1>
        <>
        <img src="https://assets.ccbp.in/frontend/hooks/bmi-levels-img.png" alt="BMI" height="150" className='imgElement'></img>
            
            </>
            <div className='maincard-container'>

     <div className='card-container'>
     
      <div className='calculator-container'>
        <p>Height</p>
        <p>{height} cms</p>
        <button onClick={()=>setHeight(height-1)}>-</button>
        <button onClick={()=>setHeight(height+1)}>+</button>
        </div>

      <div className='calculator-container'>
        <p>price</p>
        <p>{weight} kgs</p>
        <button onClick={()=>setWeight(weight-1)}>-</button>
        <button onClick={()=>setWeight(weight+1)}>+</button>
      
      </div>
  
      
      
     
      </div> 
      <p className='output'>BMI:{getBmi(height,weight)}</p> 
     
     </div>
    </div>
  )
}

export default Calculaor








