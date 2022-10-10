import React from 'react';


const  MyComponent=(flight_number,name,date_local,details)=>{
    return(
        <>
        <div className="bg-white mt-4 p-6">
              <div className="bg-white ">
                <div  className="grid grid-cols-12
                ">
                  <div className="bg-gray-400 col-span-2 py-6 ">
                   <div className=" px-6 bg-gray-400"></div>
                  </div>
                  <div className=" bg-white col-span-10 py-8 mx-8">
                   <div >
                    <h2 className="font-bold">{flight_number}: {name} ({date_local.slice(0,4)})</h2>
                    <p>Details: {details}</p>
                  </div>
      
                  </div>
                  
                </div>
              </div>
            </div>
            </>
        
    )
}

export default MyComponent