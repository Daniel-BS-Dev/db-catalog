import UserFilter, { UserFilterData } from 'components/UserFilter';
import { SpringPage } from 'types/vendor/spring';
import { requestBackend } from 'util/request';
import { useCallback, useEffect, useState } from 'react';
import { AxiosRequestConfig } from 'axios';
import { User } from 'types/user';
import './styles.css';
import { toast } from 'react-toastify';



type ControlComponentsData = {
  filterData: UserFilterData;
};

const AdminUsers = () => {
  const [page, setPage] = useState<SpringPage<User>>();
  const [isLoader, setIsLoader] = useState(false);
  const [controlComponentsData, setControlComponentsData] =
  useState<ControlComponentsData>({
    filterData: {
      name: '',
    },
  });

  const getDelete = useCallback(() => {
    const params: AxiosRequestConfig = {
      url: '/users',
      withCredentials: true,
      params: {
        name: controlComponentsData.filterData.name
      },
    };

    setIsLoader(true);
    requestBackend(params)
      .then((response) => {
        setPage(response.data);
      })
      .finally(() => {
        setIsLoader(false);
      });

  }, [controlComponentsData]);


  const handleDelete = (productId : number) => {
    if (!window.confirm('Confirme em Ok')){//para confirma se vai deletar ou não
      return;
    }

    const config: AxiosRequestConfig = {
      method: 'DELETE',
      url: `/users/${productId}`,
      withCredentials: true,
    };
    
    requestBackend(config)
    .then(() => {
     getDelete();
     toast.success('Produto deletado com sucesso')
    
    })
    .catch(()=> {
      toast.error('Category não poder apagada esta ligada a um produto')
    })
  }

  useEffect(() => {
    getDelete();
  }, [getDelete]);

  return (
    <div className="container-user">
      <div className="container-user-filter">
        <UserFilter filterData={(data: UserFilterData) => {
            setControlComponentsData({ filterData: data });
        }}/>
      </div>
      <table className="table-user">
        <thead className="table-user-header">
          <tr>
            <td >Name</td>
            <td className="table-sobrename">Sobrenome</td>
            <td className="table-name">Email</td>
            <td></td>
          </tr>
        </thead>

        {isLoader ? (
          <h1 className="carregando">Carregando...</h1>
        ) : (
          page?.content.map((item) => (
            <tbody key={item.id} className="table-user-body">
              <tr>
                <td className='format-name'>
                <td>{item.firstName}</td>
                <td className="table-sobrename">{item.lastName}</td>
                <td className="table-email">{item.email}</td>
              </td>
                <td>
                  <button className="button-user-delete" onClick={() => handleDelete(item.id)}>excluir</button>
                </td>
              </tr>
            </tbody>
          ))
        )}
      </table>
    </div>
  );
};

export default AdminUsers;
