import './styles.css';

const Register = () => {
    return(
    <div className='container-register'>
        <div className='content-register'>
            <h1>Cadastrar</h1>
            <form>
                <input type='text' placeholder='Digite Seu Primeiro Nome'/>
                <input type='text' placeholder='Digite Seu Sobrenome'/>
                <input type='email' placeholder='Digite Seu Email'/>
                <input type='password' placeholder='Digite Sua Senha'/>
                <select>
                    <option>carra</option>
                    <option>carra</option>
                    <option>carra</option>
                </select>
            </form>
        </div>
    </div>
    );
}

export default Register;