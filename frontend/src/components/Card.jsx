import React, { useState, useEffect } from 'react'
import api from '../utils/axios'
import { FaAngleDoubleRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'

const Card = () => {
  const [services, setServices] = useState([])
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/homepage/details/${id}`)
  }

  useEffect(() => {
    const fetchServices = async() => {
      try {
        await api.get("/services").then((res) => setServices(res.data))
      } catch (error) {
       console.log("Error fetching services",error);
      }
    }
    fetchServices()
  },[])



  return (
    <div className="bg-amber-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((item, idx) => (
            <div 
              key={item._id || idx} 
              className="bg-white border border-r-4 border-b-4 shadow hover:shadow-lg transition-all duration-300 group rounded-lg overflow-hidden"
            >
              {/* Image Section */}
              <div className="relative bg-gray-50 h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/400x200/f1f5f9/64748b?text=Service"
                  }}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-all duration-300"></div>
              </div>

              {/* Content Section */}
              <div className="p-4 bg-[#e7a57f] border-t-2">
                <h3 className="text-lg font-medium text-black mb-2">
                  {item.name}
                </h3>
                <p className="text-gray-900 text-sm mb-4 leading-relaxed">
                  {item.description}
                </p>

                {/* Action Section */}
                <div className="flex items-center justify-between">
                  <button 
                    onClick={()=> handleClick(item._id)} 
                    className="bg-[#dd1f4b] text-white border-[#dd1f4b] border px-4 py-2 text-sm font-medium hover:bg-[#c41e3a] hover:border-[#c41e3a] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#dd1f4b]/50 rounded"
                  >
                    Book Now <FaAngleDoubleRight className="inline-block text-white text-lg align-bottom ml-1" />
                  </button>
                  <div className="text-xs text-gray-800">
                    Available
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-2 bg-gray-50 px-4 py-2 rounded">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 11H5a2 2 0 0 0-2 2v3c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2h-4"/>
              <path d="M9 7V4a2 2 0 0 1 4 0v3"/>
              <circle cx="12" cy="13" r="1"/>
            </svg>
            <span className="text-sm text-gray-600">Need help choosing? Contact our experts</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
