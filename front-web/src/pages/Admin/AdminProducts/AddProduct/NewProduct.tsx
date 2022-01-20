import { ReactComponent as Previous } from '../../../../assets/image/Seta.svg';
import { Link, useNavigate, useParams } from 'react-router-dom';
import CurrencyInput from 'react-currency-input-field';
import { useForm, Controller } from 'react-hook-form';
import { requestBackend } from 'util/request';
import { useState, useEffect } from 'react';
import { AxiosRequestConfig } from 'axios';
import { Category } from 'types/category';
import { Product } from 'types/product';
import Select from 'react-select';
import './styles.css';
import { toast } from 'react-toastify';


type ProductUrl = {
  productId: string;
};

const NewProduct = () => {
  const { productId } = useParams<ProductUrl>(); // pegando o produto por id
  const [selectCategories, setSelectCategories] = useState<Category[]>([]);
  const isEditing = productId !== 'create'; // varialvel para saber se vai criar ou atualizar

  const {
    register,
    handleSubmit,
    setValue, // para inserir um valor ou atualizar
    control, // para controle do meu select
    formState: { errors },
  } = useForm<Product>();
  const navigate = useNavigate();

  useEffect(() => {
    requestBackend({ url: `/categories` }).then((response) => {
      setSelectCategories(response.data.content);
    });
  }, []);

  useEffect(() => {
    if (isEditing) {
      requestBackend({ url: `/products/${productId}` }).then((response) => {
        const product = response.data as Product;

        setValue('name', product.name);
        setValue('price', product.price);
        setValue('description', product.description);
        setValue('imgUrl', product.imgUrl);
        setValue('categories', product.categories);
      });
    }
  }, [isEditing, productId, setValue]);

  const onSubmit = (formData: Product) => {
    const data = {
      ...formData,
       price: String(formData.price).replace(',', ".")
    };

    const config: AxiosRequestConfig = {
      method: isEditing ? 'PUT' : 'POST',
      url: isEditing ? `/products/${productId}` : '/products',
      data,
      withCredentials: true,
    };
    requestBackend(config).then(() => {
      navigate('/admin/products/')
      toast.success("Producto Salvo com sucesso")
    })
    .catch(() => {
      alert('Ocorreu um erro. Verifique os dados e tente novamente. Nome do produto deve tem no minimo 2 a 25 caracteres, Valor tem que ser positivo, descrição deve ter entre 2 a 2500 caracteres')
    })
  };

  const handleCancel = () => {
    navigate('/admin/products/');
  };

  return (
    <div className="container-new-product">
      <div className="content-new-product">
        <Link to="/admin/products" className="title-new-product">
          <Previous className="previous-new-product" />
          <h2>voltar</h2>
        </Link>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row form-new-product">
            <div className="col-12 col-lg-6 input-new-product">
              <input
                type="text"
                placeholder="Nome do Produto"
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
              <Controller
                name="categories"
                rules={{ required: true }} // obriga o usuario a selecionar 
                control={control}
                render={({ field }) => (
                  <Select
                    {...field}
                    placeholder="Categories"
                    options={selectCategories}
                    classNamePrefix="select-new-product"
                    isMulti
                    getOptionLabel={(category: Category) => category.name}
                    getOptionValue={(category: Category) => String(category.id)}
                  />
                )}
              />
              <div className='input-error'>
              {errors.categories && (
              <div className="invalid-feedback d-block login-error">
                  campo obrigatório
              </div>
              )}
              </div>
              <Controller
                name="price"
                rules={{required: 'Campo obrigatorio'}}
                control={control}
                render={({ field }) => (
                  <CurrencyInput
                  placeholder="Preço"
                  className={`form-control ${errors.price ? 'is-invalid' : ''}`}
                  disableGroupSeparators={true}
                  value={field.value}
                  onValueChange={field.onChange}
                   />
                )}
               
              />
              <div className="invalid-feedback d-block login-error input-error">
                {errors.price?.message}
              </div>
              <input
                type="text"
                placeholder="URL da imagem"
                className={`form-control ${errors.imgUrl ? 'is-invalid' : ''}`}
                {...register('imgUrl', {
                  pattern : {
                    value: /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/,
                    message: 'Essa URL não é valida. Verifique-a e tente novamente'
                  }
                })}
              />
               <div className="invalid-feedback d-block login-error input-error">
                {errors.imgUrl?.message}
              </div>
            </div>
            <div className="col-12 col-lg-6 description-new-product">
              <textarea
                rows={10}
                className={`form-control h-auto ${
                  errors.price ? 'is-invalid' : ''
                }`}
                placeholder="Descrição"
                {...register('description', {
                  required: 'Campo obrigatório',
                })}
              />
              <div className="invalid-feedback d-block login-error ">
                {errors.description?.message}
              </div>
            </div>
          </div>
          <div className="buttons-new-product">
            <button className="btn btn-outline-danger" onClick={handleCancel}>
              Cancelar
            </button>
            <button className="btn btn-outline-primary">Salvar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewProduct;
