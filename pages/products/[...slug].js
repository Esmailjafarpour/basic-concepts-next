import {useRouter} from 'next/router';


const Slug = () => {
     const router = useRouter()
     console.log(router.query)
     return (
          <div>
               products
          </div>
     );
}

export default Slug;
