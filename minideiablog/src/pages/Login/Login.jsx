import React, { useEffect } from 'react'
import styles from '../Login.module.css'
import { useAuthentication } from '../../hooks/useAuthentication'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [email, setEmail] = setState();
    const [password, setPassword] = setState();
    const [error, setError] = setState();

    const { login, error: authError, loading } = useAuthentication()
    const navigate = useNavigate()

    const handlerSubmit = async (e) => {
      e.preventDefault()
      setError('')
      const user = {
        email,
        password
      }

      const res = await login(user)

      console.table(res)
      navigate('/post/create')
    }

    useEffect(() => {
      if (authError) {
        setError(authError)
      }
    }, [authError])
  return (
    <div className={styles.login}>
      <h1>Entrar no Ideia App</h1>
      <p>Compartilhe suas ideias! Aqui no nosso App</p>
      <form onSubmit={handlerSubmit}>
        <label>
          <span>E-mail: </span>
          <input 
          type='email' 
          name='email' 
          required 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Digite seu e-mail'
          />
        </label>
        <label>
          <span>Senha: </span>
          <input
          type='password'
          name='password'
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Entre com sua senha'
          />
        </label>
        {!loading && <button className='btn'>Login</button>}
        {loading && <button className='btn' disabled>Aguarde...</button>}
        {error && <p className='error'>{error}</p>}
      </form>
    </div>
  )
}

export default Login