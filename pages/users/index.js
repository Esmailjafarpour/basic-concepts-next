import Link from 'next/link';

const UserPage = () => {
     const users = [
          {id : 1 , username : 'nader'},
          {id : 2 , username : 'admin'}
     ]
     return (
          <div>
               <h4>User Page</h4>
               <ul>
                    {
                         users.map(user => (
                              <li key={user.id}><Link href={`users/${user.id}`}>{user.username}</Link></li>
                         ))
                    }
                    *------------***-------------*
                    {
                         users.map(user => (
                              <li key={user.id}>
                                   <Link href={{
                                        pathname : 'users/[id]',
                                        query : {id : user.id}
                                   }}>
                                        {user.username}
                                   </Link>
                              </li>
                         ))
                    }
                    
               </ul>
          </div>
     );
}

export default UserPage;
