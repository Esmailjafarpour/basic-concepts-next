import React from 'react';
import fs from 'fs/promises';
import path from "path";

const productDetailsPage = (props) => {

     if(!props.loadedProduct) return <h1>Loading ....</h1>
     const {title , price} = props.loadedProduct 
     return (
          <div>
               <h2>{title}</h2>
               <p>{price}</p>
          </div>
     );

}

async function getData(){

     const filePath = path.join(process.cwd(),'data','products.json')
     const jsonData = await fs.readFile(filePath)
     const data = JSON.parse(jsonData)

     return data
}

export async function getStaticProps(context){
          
     const { params } = context
     const productId = params.pid 

     const data = await getData()
     const product = data.products.find((product) => (product.id === productId))

     return{
          props : {
               loadedProduct : product,
          },
     }
}

export async function getStaticPaths (){

     const data = await getData()  
     const ids = data.products.map((item) => item.id)
     const params = ids.map((id => ({params : {pid : id}})))

     return{
          paths : params,
          fallback : true
     }
}

export default productDetailsPage;
