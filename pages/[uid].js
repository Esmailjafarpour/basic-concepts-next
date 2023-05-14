import React from 'react';

const UserIdPage = (props) => {
     return (
          <div>
               <h4>{props.id}</h4>
          </div>
     );
}

export default UserIdPage;


export async function getServerSideProps (context){

     const { params } = context

     const userId = params.uid

     return{
          props : {
               id : 'userId_' + userId
          }
     }
}