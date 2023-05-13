import React from 'react';
import fs from 'fs/promises';
import path from "path";

const productDetailsPage = (props) => {

     const {title , price} = props.loadedProduct 
     return (
          <div>
               <h2>{title}</h2>
               <p>{price}</p>
          </div>
     );

}

export async function getStaticProps(context){
          
     const { params } = context
     const productId = params.pid 

     const filePath = path.join(process.cwd(),'data','products.json')
     const jsonData = await fs.readFile(filePath)
     const data = JSON.parse(jsonData)
     const product = data.products.find((product) => (product.id === productId))

     return{
          props : {
               loadedProduct : product,
          },
     }
}

export async function getStaticPaths (){
     return{
          paths : [
               {params : {pid : "p1"}},
               {params : {pid : "p2"}},
               {params : {pid : "p3"}},
          ],
          fallback : false
     }
}

export default productDetailsPage;
