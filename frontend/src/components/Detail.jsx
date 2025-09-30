import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import api from '../utils/axios';

const Detail = () => {
  const { id } = useParams();  
  const [service, setService] = useState(null); 

  useEffect(() => {
    const fetchService = async () => {
      try {
        const res = await api.get(`/services/${id}`);  
        setService(res.data);  
      } catch (error) {
        console.log(error)
      }
    };

    fetchService();
  }, [id]);

  if (!service) {
    return <p>Loading...</p> 
  }

  return (
    <div >
      <div className='w-full h-[28rem] '>
        <img src={service.image} alt={service.name} className='w-full h-full object-cover'/>
      </div>
     
     <div className='max-w-7xl mx-auto px-5 py-10 '>
       <h2 className='font-bold text-4xl mb-6'>{service.name}</h2>
      <p className='mb-6'>{service.description}</p>
      <button className='bg-[#DD1F4B] text-white border-none rounded p-2'>Book a session</button>
     </div>
    </div>
  )
}

export default Detail