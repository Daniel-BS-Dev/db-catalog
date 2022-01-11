import { ReactComponent as Previous } from '../../../../assets/image/Seta.svg';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { requestBackend } from 'util/request';
import { AxiosRequestConfig } from 'axios';
import { useForm } from 'react-hook-form';
import { Product } from 'types/product';
import { useEffect } from 'react';
import './styles.css';

type ProductUrl = {
  productId : string;
}

const NewProduct = () => {

  const { productId } = useParams<ProductUrl>(); // pegando o produto por id

  const isEditing = productId !== 'create'; // varialvel para saber se vai criar ou atualizar

  const {
    register,
    handleSubmit,
    setValue,  // para inserir um valor ou atualizar
    formState: { errors },
  } = useForm<Product>();
  const navigate = useNavigate();

  useEffect(() => {
     if(isEditing){
       requestBackend({url: `/products/${productId}`})
       .then(response => {
         const product = response.data as Product;

         setValue('name', product.name);
         setValue('price', product.price);
         setValue('description', product.description);
         setValue('imgUrl', product.imgUrl);
         setValue('categories', product.categories);
       })
     
      }
  },[isEditing, productId, setValue]);

  const onSubmit = (formData: Product) => {
    const data = {
      ...formData,
      imgUrl: isEditing ? formData.imgUrl : '	https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/3-big.jpg',
      categories: isEditing ? formData.categories :  [
        {
          id: 1,
          name: 'eletronicos',
        },
      ],
    };

    const config: AxiosRequestConfig = {
      method: isEditing ? 'PUT' :  'POST',
      url: isEditing ? `/products/${productId}` : '/products',
      data,
      withCredentials: true,
    };
    requestBackend(config)
    .then((response) => {
      console.log(response.data)});
      navigate('/admin/products/');
  };

  const handleCancel = () => {
    navigate('/admin/products/');
  }

  return (
    <div className="container-new-product">
      <div className="content-new-product">
        <Link to="/admin/products" className="title-new-product">
          <Previous className="previous-new-product" />
          <h2>Voltar</h2>
        </Link>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row form-new-product">
            <div className="col-12 col-md-6 input-new-product">
              <input
                type="text"
                placeholder="Nome do Produto"
                className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                {...register('name', {
                  required: 'Campo obrigatório',
                })}
              />
              <div className="invalid-feedback d-block login-error">
                {
                  // para aparecer e tenho que usar o display block na div
                  errors.name?.message //pegando erro com o hook message e a mensagem do meu required
                }
              </div>
              <input
                type="text"
                placeholder="Preço"
                className={`form-control ${errors.price ? 'is-invalid' : ''}`}
                {...register('price', {
                  required: 'Campo obrigatório',
                })}
              />
              <div className="invalid-feedback d-block login-error">
                {
                  errors.price?.message
                }
              </div>
            </div>
            <div className="col-12 col-md-6 description-new-product">
              <textarea 
              rows={10} 
              className={`form-control h-auto ${errors.price ? 'is-invalid' : ''}`}
              placeholder="Descrição"
              {...register('description', {
                required: 'Campo obrigatório',
              })}
              />
             <div className="invalid-feedback d-block login-error">
                {
                  errors.description?.message
                }
              </div>
            </div>
          </div>
          <div className="buttons-new-product">
            <button className="btn btn-outline-danger" onClick={handleCancel}>Cancelar</button>
            <button className="btn btn-outline-primary">Salvar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewProduct;
