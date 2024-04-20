'use client'
import { useState } from "react";
import axios from 'axios'

const CadastroNoticiaForm = () => {
    const [titulo, setTitulo] = useState('')
    const [img, setImg] = useState('')
    const [texto, setTexto] = useState('')
    const [categoria, setCategoria] = useState('')


    const aoSubmeter = async (e) => {
        e.preventDefault();
        try {
            const formulario = {
                titulo,
                img,
                texto,
                categoria
            }
            const result = await axios.post('http://localhost:8080/noticias', formulario)
            alert('Nova noticia cadastrada')
            return router.push('/home')
        } catch (error) {
            alert(error.response.data.message)
            
        }
        
    }

    const aoAlterarValores = (e) => {
        const { name, value } = e.target;
        if (name === 'titulo') {
            setTitulo(value)
        }

        if (name === 'img') {
            setImg(value)
        }

        if (name === 'texto') {
            setTexto(value)
        }
        if (name === 'categoria') {
            setCategoria(value)
        }
    }
    return (
        <form onSubmit={aoSubmeter}>
            <div>
                <label htmlFor="titulo">Titulo</label>
                <input type="text" name="titulo" onChange={aoAlterarValores} />
            </div>
            <div>
                <label htmlFor="img">Imagem</label>
                <input type="text" name="img" onChange={aoAlterarValores} />
            </div>
            <div>
                <label htmlFor="texto">Texto</label>
                <input type="text" name="texto" onChange={aoAlterarValores} />
            </div>
            <div>
                <label htmlFor="categoria">Categoria</label>
                <select name="categoria" onChange={aoAlterarValores}>
                    <option value="produto">Produto</option>
                    <option value="tecnologia">Tecnologia</option>
                    <option value="rh">RH</option>
                    <option value="vendas">Vendas</option>
                </select>
            </div>
            <button type="submit">Criar notícia</button>
        </form>
    )
}

export default CadastroNoticiaForm