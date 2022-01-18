import { AxiosRequestConfig } from "axios";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Category } from "types/category";
import { requestBackend } from "util/request";
import './styles.css';

type ProductUrl = {
    categoryId: string;
  };

const NewCategory = () => {

    const { categoryId } = useParams<ProductUrl>();
    const {register,handleSubmit,setValue, formState: { errors },} = useForm<Category>();
    const isEditing = categoryId !== 'create';
    const navigate = useNavigate();

    useEffect(() => {
        if (isEditing) {
          requestBackend({ url: `/categories/${categoryId}` }).then((response) => {
            const category = response.data as Category;
    
            setValue('name', category.name);
           
          });
        }
      }, [isEditing, categoryId, setValue]);

    const onSubmit = (formData: Category) => {
    
          const config: AxiosRequestConfig = {
            method: isEditing ? 'PUT' : 'POST',
            url: isEditing ? `/categories/${categoryId}` : '/categories',
            data: formData,
            withCredentials: true,
          };
          requestBackend(config).then((response) => {
            console.log(response);
            navigate('/admin/categories/');
            toast.success('Categoria adicionada com sucesso!')
          })
          .catch(() => {
              toast.error('Nome da categoria deve ter no minimo 5 caracter')
          })
          
    };

    const handleCancel = () => {
      navigate('/admin/categories');
    }

  return (
    <div className="container-new-category">
      <div className="content-new-category">
          <h2>Categoria</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
        <input
                type="text"
                placeholder="Nome da Categoria"
                className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                {...register('name', {
                  required: 'Campo obrigatório',
                })}
              />
              <div className="invalid-feedback d-block login-error input-error">
                {
                  // para aparecer e tenho que usar o display block na div
                  errors.name?.message //pegando erro com o hook message e a mensagem do meu required
                }
              </div>
          <div className="card-form-category-button">
            <button className="btn btn-outline-secondary">SALVAR</button>
            <button className="btn btn-outline-danger space-button" onClick={handleCancel}>CANCELAR</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewCategory;
