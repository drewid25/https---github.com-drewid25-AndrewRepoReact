import React, { useEffect, useState } from "react";
import "./App.css";

const url = "https://api.spacexdata.com/v4/launches/";
function App() {
  const [data, setData] = useState([]);
  const [loading,setLoading] = useState(false)
 
 
  const fetchMission = async () => {
    setLoading(true)
    try{
      const response = await fetch(url);
      const datos = await response.json();
      setData(datos);
      setLoading(false)
    } catch (error) {
      console.log(error)
     setLoading(false)
    };
    
  }
    
	useEffect(() => {

		fetchMission();
	},[]);
  
 

    
 

 
  console.log(data);
if (loading){
  return (
    <h1 className="font-bold mx-auto">Loading....</h1>
  )
}
  

    return (
      <>
        <div className="container mx-auto my-6 h-full py-6 px-6 bg-gray-300"  >

          <div className="mt-5 grid  w-50 container mx-auto ">
            <input
              className=" px-3 py-2  w-full hover:outline-yellow6"
              type="text"
              placeholder="Enter keywords"
              // onChange={(e) => {
              //   setSearch(e.target.value);
              // }}
            />
          </div>
  
          {data.map((flight)=>{
            return(
              <div className="bg-white mt-4 p-6">
              <div className="bg-white ">
                <div  className="grid grid-cols-12
                ">
                  <div className="bg-gray-400 col-span-2 py-6 ">
                   <div className=" px-6 bg-gray-400"></div>
                  </div>
                  <div className=" bg-white col-span-10 py-8 mx-8">
                   <div >
                    <h2 className="font-bold">{flight.flight_number}: {flight.name} ({flight.date_local.slice(0,4)})</h2>
                    <p>Details: {flight.details}</p>
                  </div>
      
                  </div>
                  
                </div>
              </div>
            </div>
        
            )
          })}
           </div>
      </>
    );
  }
  

export default App;
