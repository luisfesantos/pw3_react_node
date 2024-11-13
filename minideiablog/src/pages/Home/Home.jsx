import React from 'react'
import logo from '/MBD.png'
import styles from './Home.module.css'
import { useFetchDocuments } from '../../hooks/useFetchDocuments'
import { useNavigate } from 'react-router-dom'

import { useState } from 'react'

import PostDetail from '../../componentes/PostDetail'

export const Home = () => {
    const { documents: posts, loading } = useFetchDocuments('posts')
    const navigate = useNavigate()
    const [ query, setQuery ] = useState()

    const handlerSubmit = (e) => {
        e.preventDefault()

        if (query) {
            return navigate(`/search?q=${query}`)
        }
    }

    console.log(loading)

    return (
        <>
            <div className={styles.home}>
                <h1>Veja nossas Ideias!</h1>
                <form className={styles.search_form} onSubmit={handlerSubmit}>
                    <input
                    type="text"
                    placeholder="Ou busque por tags..."
                    onChange={(e) => setQuery(e.target.value)}
                    />
                    <button className='btn btn-dart'>Pesquisar</button>
                </form>
                <div className='post-list'>
                    {loading && <p>Carregando...</p>}
                    {posts && posts.length === 0 && (
                        <>
                        <div className={styles.noposts}>
                            <p>Não encontramos Ideias cara!</p>
                            <img src={logo} alt='Logo do Site'/>
                        </div>
                        </>
                    )}
                    {posts && posts.map((post) => <PostDetail key={post.id} post={post} />)}
                </div>
            </div>
        </>
    )
}

export default Home