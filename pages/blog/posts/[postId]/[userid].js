import React from 'react';
import {useRouter} from "next/router";

const UserPosts = () => {
     const router = useRouter();
     console.log(router)
     return (
          <div>
               <h4>post Id : {router.query.postId}</h4>
               <h4>user id : {router.query.userid}</h4>
          </div>
     );
}

export default UserPosts;
