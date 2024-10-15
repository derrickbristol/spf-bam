const BaseUrl = process.env.BASE_URL


export const fetchSuppliers = async () => {
 
    try {
      
      const res = await fetch(BaseUrl+"supplier",{ cache: 'no-store' })
      const data = await res.json();
      
      return data;
    } catch (err) {
      console.log(err);
      throw new Error("Failed to fetch suppliers!");
    }
    
  };



  export const fetchTransaction = async () => {
 
    try {
      
      const res = await fetch(BaseUrl+"transactions",{ cache: 'no-store' })
      const data = await res.json();
      return data;
    } catch (err) {
      console.log(err);
      throw new Error("Failed to fetch transactions!");
    }
    
  };


  export const fetchSuppliersById = async (id) => {
       const daa = {
        id: id,
      };
    try {
  
    

      const res = await fetch(BaseUrl+"supplierByID",
        { cache: 'no-store' ,
               method: "POST",
               body:JSON.stringify(daa),
               headers: {
                 Accept: "application/json",
                 "Content-Type": "application/json",
               },
             })
      const data = await res.json();
     
      return data;
    } catch (err) {
      console.log(err);
      throw new Error("Failed to fetch suppliers!"+ err);
    }
    
  };


  export const fetchEquipmentById = async (id) => {
    const daa = {
     id: id,
   };
 try {

 

   const res = await fetch(BaseUrl+"equipmentByID",
     { cache: 'no-store' ,
            method: "POST",
            body:JSON.stringify(daa),
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          })
   const data = await res.json();
  
   return data;
 } catch (err) {
   console.log(err);
   throw new Error("Failed to fetch suppliers!"+ err);
 }
 
};



  export const fetchProductById = async (id) => {
    const daa = {
     id: id,
   };
 try {

   const res = await fetch(BaseUrl+"productByID",
     {
            method: "POST",
            body:JSON.stringify(daa),
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          })
   const data = await res.json();
  
   return data;
 } catch (err) {
   console.log(err);
   throw new Error("Failed to fetch suppliers!"+ err);
 }
 
};


export const fetchStock = async () => {
    
  try {
    
    const res = await fetch(BaseUrl+"stock",{ cache: 'no-store' })
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch stock!");
  }
  
};




  export const fetchProducts = async () => {
    
    try {
      
      const res = await fetch(BaseUrl+"products",{ cache: 'no-store' })
      const data = await res.json();
      return data;
    } catch (err) {
      console.log(err);
      throw new Error("Failed to fetch product!");
    }
    
  };

  export const fetchOrders = async () => {
    
    try {
      
      const res = await fetch(BaseUrl+"orders",{ cache: 'no-store' })
      const data = await res.json();
      return data;
    } catch (err) {
      console.log(err);
      throw new Error("Failed to fetch Orders!");
    }
    
  };

  export const fetchEquipments = async () => {
    try {
      
      const res = await fetch(BaseUrl+"equipments",{ cache: 'no-store' })
      const data = await res.json();
      return data;
    } catch (err) {
      console.log(err);
      throw new Error("Failed to fetch equipments!");
    }
    
  };

  export const fetchCategory = async () => {
    
    try {
      
      const res = await fetch(BaseUrl+"categories",{ cache: 'no-store' })
      const data = await res.json();
      // console.log("wqewe")
      // console.log(data)
      return data;
    } catch (err) {
      console.log(err);
      throw new Error("Failed to fetch cats!");
    }
    
  };


