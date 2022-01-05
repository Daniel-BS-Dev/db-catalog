import { SpringPage } from 'types/vendor/spring';
import { requestBackend } from 'util/request';
import { useEffect, useState } from 'react';
import { AxiosRequestConfig } from 'axios';
import { User } from 'types/user';


const AdminUsers = () => {
 const [page, setPage] = useState<User[]>([]);

  useEffect(() => {
    const params: AxiosRequestConfig = {
      url: '/users',
      withCredentials: true,
      params: {
        page: 0,
        size: 12,
      },
    };

    requestBackend(params).then((response) => {
      setPage(response.data);
      
    });
  }, []);

  return (
    <div>
    {page.map(item => (
       <h1 key={item.id}>{item.email}</h1>
     ))}
    </div>
  );
};

export default AdminUsers;
