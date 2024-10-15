"use server";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
const BaseUrl = process.env.BASE_URL

export const fetchStatement = async (formData:FormData) => {
 let data =[]
  try{
    
   const intP= formData.get("interestPeriod") 
   const nin =formData.get("NIN") 
    let query ={IntPeriod:intP,MEMNIN:nin}

    const res = await   fetch(BaseUrl+"getApplication", 
     {
       method: "POST",
       body:JSON.stringify(query),
       headers: {
         Accept: "application/json",
         "Content-Type": "application/json",
       },
     })
 
     data[0]= await res.json();
     const resGrid = await   fetch(BaseUrl+"getMandatoryContributionId", 
     {
       method: "POST",
       body:JSON.stringify(query),
       headers: {
         Accept: "application/json",
         "Content-Type": "application/json",
       },
     })
   
   data[1]= await resGrid.json();
   const resSummary = await   fetch(BaseUrl+"summary", 
     {
       method: "POST",
       body:JSON.stringify(query),
       headers: {
         Accept: "application/json",
         "Content-Type": "application/json",
       },
     })

   data[2]= await resSummary.json();





const resBenefits = await fetch(BaseUrl+"benefitTypes",{ cache: 'no-store' })
 data[3] = await resBenefits.json();

return data

  }
  catch(err){

    throw new Error("Failed to get data")
  }
    

  };

  export const fetchCheckList = async (benefittype:string) => {
    let data =[]
    
     try{

       let query ={ BENEFITTYPE: benefittype };
    
       const res = await   fetch(BaseUrl+"checklist", 
        {
          method: "POST",
          body:JSON.stringify(query),
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        })
        data= await res.json();
   
  //  console.log(data)
   return data
   
     }
     catch(err){
       console.log(err)
       throw new Error("Failed to get data")
     }
       
   
     };

     export const fetchApplications = async () => {
      let data =[]
      
       try{
  
       
      
         const res = await   fetch(BaseUrl+"allApplication", 
          {
            method: "POST",
            // body:JSON.stringify(),
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          })
          data= await res.json();
     
    //  console.log(data)
     return data
     
       }
       catch(err){
         console.log(err)
         throw new Error("Failed to get data")
       }
         
     
       };

       export const fetchEnquiry = async () => {
        let data =[]
        
         try{
    
         
        
           const res = await   fetch(BaseUrl+"allEnquiry", 
            {
              method: "POST",
              // body:JSON.stringify(),
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
            })
            data= await res.json();
       
      //  console.log(data)
       return data
       
         }
         catch(err){
           console.log(err)
           throw new Error("Failed to get enquiries")
         }
           
       
         };

  