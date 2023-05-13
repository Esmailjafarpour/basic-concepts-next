
import Link from 'next/link';
import fs from 'fs/promises';
import path from 'path';


const HomePages = (props) => {

     const{products} = props
     return (
          <div>
               <h4>Home pages</h4>
               <ul>
                    {/* <li><Link href="/blog/posts">blog</Link></li>
                    <li><Link href="/blog/posts/nader">bloguser</Link></li> */}
                    {products.map(product => (
                         <li key={product.id }>
                              <Link href={`/${product.id}`}>
                                   {product.title}
                              </Link>
                         </li>
                    ))}
               </ul>
          </div>
     );
}


//rendering server 
     export async function getStaticProps(){

          const filePath = path.join(process.cwd(),'data','products.json')

          const jsonData = await fs.readFile(filePath)

          const data = JSON.parse(jsonData)

          return{

               props : {
                    products : data.products,
               },
               
          }
     }



export default HomePages;
