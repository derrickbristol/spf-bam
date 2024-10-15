"use server";

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import axios from 'axios';
import { NextRequest, NextResponse } from "next/server";
const BaseUrl = process.env.BASE_URL
/* uncomment if not accessing the spf network (development)*/
// let username = "john";
 let isPro = true;
// let isBlocked = true;


export const logout = async () => {
  // const session = await getSession();
  // session.destroy();
  redirect("/login");
};




export const addSupplier = async (formData) => {

  //TODO validate the data
  const {SupplierName,SupplierAddress,SupplierPhone,SupplierEmail,SupplierStatus,SupplierItemDescription,TIN,SupplierLicNo}=Object.fromEntries(formData)
  try{
   

    let valueData = {SupplierName,SupplierAddress,SupplierPhone,SupplierEmail,SupplierStatus,SupplierItemDescription,TIN,SupplierLicNo}

    const res = await   fetch(BaseUrl+"supplier", 
     {
       method: "POST",
       body:JSON.stringify(valueData),
       headers: {
         Accept: "application/json",
         "Content-Type": "application/json",
       },
     })
  }
  catch(err){
    console.log(err)
    throw new Error("Failed to add Supplier")
  }

  revalidatePath("/inventory/suppliers")
  redirect("/suppliers")
}

export const addOrder = async (formData) => {

  //TODO validate the data
  const {id,Quantity}=Object.fromEntries(formData)
  try{
   

    let valueData = {id,Quantity}
   console.log(valueData)
    const res = await   fetch(BaseUrl+"orders", 
     {
       method: "POST",
       body:JSON.stringify(valueData),
       headers: {
         Accept: "application/json",
         "Content-Type": "application/json",
       },
     })
  }
  catch(err){
    console.log(err)
    throw new Error("Failed to add Order")
  }

  revalidatePath("/inventory/suppliers")
  redirect("/stock")
}

export const Issue = async (formData) => {

  //TODO validate the data
  const {id,Quantity}=Object.fromEntries(formData)
  try{
   

    let valueData = {id,Quantity}
   console.log(valueData)
    const res = await   fetch(BaseUrl+"ordersUpdate", 
     {
       method: "POST",
       body:JSON.stringify(valueData),
       headers: {
         Accept: "application/json",
         "Content-Type": "application/json",
       },
     })
  }
  catch(err){
    console.log(err)
    throw new Error("Failed to Issue")
  }

  revalidatePath("/inventory/orders")
  // redirect("/stock")
}


export const updateSupplier = async (formData) => {
  
  //TODO validate the data
  const {id,SupplierName,SupplierAddress,SupplierPhone,SupplierEmail,SupplierStatus,SupplierItemDescription,TIN,SupplierLicNo}=Object.fromEntries(formData)
  
  try{
    const updateFields = {id,SupplierName,SupplierAddress,SupplierPhone,SupplierEmail,SupplierStatus,SupplierItemDescription,TIN,SupplierLicNo}
    //  console.log("updateFields")
    //  console.log(updateFields)
    Object.keys(updateFields).forEach((Key)=>(updateFields[Key]===""|| undefined) && delete updateFields[Key]);
   
    const res = await   fetch(BaseUrl+"supplier", 
     {
       method: "PUT",
       body:JSON.stringify(updateFields),
       headers: {
         Accept: "application/json",
         "Content-Type": "application/json",
       },
     })
 

  }
  catch(err){
    console.log(err)
    throw new Error("Failed to update supplier")
  }

  revalidatePath("/inventory/suppliers")
  redirect("/suppliers")
}


export const updateEquipment = async (formData) => {
  
  //TODO validate the data
  const {id,Notes,Brand, Status, Location,Price,LPONumber,Vacant,Serial,Model,Category,Supplier,PurchasedDate}=Object.fromEntries(formData)
  
  try{
    const updateFields = {id,Notes,Brand, Status, Location,Price,LPONumber,Vacant,Serial,Model,Category,Supplier,PurchasedDate}
      // console.log("updateFields")
      // console.log(updateFields)
    Object.keys(updateFields).forEach((Key)=>(updateFields[Key]===""|| undefined) && delete updateFields[Key]);
   
    const res = await   fetch(BaseUrl+"equipments", 
     {
       method: "PUT",
       body:JSON.stringify(updateFields),
       headers: {
         Accept: "application/json",
         "Content-Type": "application/json",
       },
     })
  }
  catch(err){
    console.log(err)
    throw new Error("Failed to update supplier")
  }
  revalidatePath("/inventory/equipments")
  redirect("/equipments")
}

export const updateProduct = async (formData) => {
  
  //TODO validate the data
  const {UnitofMeasurement,fk_subCategory,ProductDescription,ProductPartNo,fk_ParentProduct,MinOrderLevel,Status}=Object.fromEntries(formData)
  
  try{
    const updateFields = {UnitofMeasurement,fk_subCategory,ProductDescription,ProductPartNo,fk_ParentProduct,MinOrderLevel,Status}
       console.log("updateFields")
       console.log(updateFields)
    Object.keys(updateFields).forEach((Key)=>(updateFields[Key]===""|| undefined) && delete updateFields[Key]);
   
    const res = await   fetch(BaseUrl+"products", 
     {
       method: "PUT",
       body:JSON.stringify(updateFields),
       headers: {
         Accept: "application/json",
         "Content-Type": "application/json",
       },
     })
  }
  catch(err){
    console.log(err)
    throw new Error("Failed to update supplier")
  }
  revalidatePath("/inventory/equipments")
  redirect("/products")
}




export const addProducts = async (formData) => {

  //TODO validate the data
  const {UnitofMeasurement,fk_subCategory,ProductDescription,ProductPartNo,fk_ParentProduct,MinOrderLevel,Status}=Object.fromEntries(formData)
  try{
   

    let valueData =  {UnitofMeasurement,fk_subCategory,ProductDescription,ProductPartNo,fk_ParentProduct,MinOrderLevel,Status}
   console.log(valueData)
    const res = await   fetch(BaseUrl+"products", 
     {
       method: "POST",
       body:JSON.stringify(valueData),
       headers: {
         Accept: "application/json",
         "Content-Type": "application/json",
       },
     })
 

  }
  catch(err){
    console.log(err)
    throw new Error("Failed to add product")
  }

  revalidatePath("/inventory/suppliers")
  redirect("/products")
}


export const addEquipments = async (formData) => {

  //TODO validate the data
const {Notes,Brand, Status, Location,Price,LPONumber,Vacant,Serial,Model,Category,Supplier,PurchasedDate}=Object.fromEntries(formData)
  try{
   

    let valueData = {Notes:Notes,Brand:Brand, Status:Status, Location:Location,Price:Price,LPONumber:LPONumber,Vacant:Vacant,Serial:Serial,Model:Model,Category:Category,Supplier:Supplier,PurchasedDate:PurchasedDate}
   console.log(valueData)
    const res = await   fetch(BaseUrl+"equipments", 
     {
       method: "POST",
       body:JSON.stringify(valueData),
       headers: {
         Accept: "application/json",
         "Content-Type": "application/json",
       },
     })
 

  }
  catch(err){
    console.log(err)
    throw new Error("Failed to add equipment")
  }

  revalidatePath("/inventory/equipments")
  redirect("/equipments")
}


export const addStock = async (formData) => {

  //TODO validate the data
const {ProductId,Supplier, StockTransactionQuantity, Price,StockTransactionPOnumber,StockTransactionInvRefNo,StockTransactionInvoiceDate,StockTransactionIntakeDate,StockTransactionExpiryDate}=Object.fromEntries(formData)
  try{
   

    let valueData = {ProductId,Supplier, StockTransactionQuantity,Price,StockTransactionPOnumber,StockTransactionInvRefNo,StockTransactionInvoiceDate,StockTransactionIntakeDate,StockTransactionExpiryDate}

    const res = await   fetch(BaseUrl+"transactions", 
     {
       method: "POST",
       body:JSON.stringify(valueData),
       headers: {
         Accept: "application/json",
         "Content-Type": "application/json",
       },
     })
 

  }
  catch(err){
    console.log(err)
    throw new Error("Failed to add stock")
  }

  revalidatePath("/inventory/equipments")
  redirect("/transaction")
}


