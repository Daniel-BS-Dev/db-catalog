import { requestBackend } from 'util/request';
import { SpringPage } from 'types/vendor/spring';
import { useEffect, useState } from 'react';
import { AxiosRequestConfig } from 'axios';
import { User } from 'types/user';
import './styles.css';
import UserFilter from 'components/UserFilter';


const AdminUsers = () => {
 const [page, setPage] = useState<SpringPage<User>>();
 const [isLoader, setIsLoader] = useState(false);

  useEffect(() => {
    const params: AxiosRequestConfig = {
      url: '/users',
      withCredentials: true,
      params: {
        page: 0,
        linePerPages: 12,
      },
    };
    
    setIsLoader(true);
    requestBackend(params).then((response) => {
      setPage(response.data);
      
    })
    .finally(() => {
      setIsLoader(false);
    });
  }, []);

  return (
     <div className="container-user">
    <UserFilter />
      <table className="table-user">
         <thead  className="table-user-header">
          <tr>
            <td className="table-name">Name</td>
            <td className="table-sobrename">Sobrenome</td>
            <td>Email</td>
            <td></td>
          </tr>
        </thead>
  
    {isLoader ? (
        <h1 className="carregando">Carregando...</h1>
      ) : (page?.content.map(item => (
       <tbody key={item.id}  className="table-user-body">
         <tr>
           <td className="table-name">{item.firstName}</td>
           <td className="table-sobrename">{item.lastName}</td>
           <td className="table-email">{item.email}</td>
           <td><button className="button-user-delete">excluir</button></td>
         </tr>
       </tbody>
       
     )))}

     </table>
    
     </div>
  );
};

export default AdminUsers;
