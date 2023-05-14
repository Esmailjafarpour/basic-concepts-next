import React from 'react';

const UserPage = (props) => {
     return (
          <div>
               <h1>{props.username}</h1>
          </div>
     );
}


export async function getServerSideProps(context){

     const {params , res , req} = context

     console.log(req)
     console.log(res)
     
     return {
          props : {
               username : "nader"
          }
     }
}

export default UserPage;
