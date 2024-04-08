import GridNoticias from "@/components/GridNoticias";

const noticias = [
    {
        id: 1,
        titulo: 'Noticia 1',
        img: 'https://via.placeholder.com/150',
        texto: 'Texto da <b>noticia 1 </b>'
    },
    {
        id: 2,
        titulo: 'Noticia 2',
        img: 'https://via.placeholder.com/150',
        texto: 'Texto da <b>noticia 2 </b>'
    },
    {
        id: 3,
        titulo: 'Noticia 3',
        img: 'https://via.placeholder.com/150',
        texto: 'Texto da <b>noticia 3 </b>'
    }
]

const NoticiasPage = ({ params }) => {
    return (
        <div>
            <h1>{ params.categoria }</h1>
            <GridNoticias noticias={noticias} />
        </div>
    )
    
}

export default NoticiasPage;