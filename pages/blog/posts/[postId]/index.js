import {useRouter} from "next/router";

const SingelPost = () => {
     const router = useRouter();
     console.log(router)
     return (
          <div>
               <h4>Singel Post Page : {router.query.postId}</h4>
          </div>
     );
}

export default SingelPost;
