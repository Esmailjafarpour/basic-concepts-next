import {useRouter} from "next/router";

const Id = () => {
     const router = useRouter();
     console.log(router.pathname)
     console.log(router.query)


     const showUserIdHandler = () => {

          // router.push('/users/nader')

          router.push({

               pathname : '/users/[id]',
               query : {id : 'nader'}
          })
     }

     return (
          <div>
               <h4>id : {router.query.id}</h4>
               <button onClick={showUserIdHandler}>show user Id : {router.query.id}</button>
          </div>
     );
}

export default Id;
