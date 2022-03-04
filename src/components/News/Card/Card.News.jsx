import "./style.css";

const CardNews = ({newsData}) => {
    
    if(newsData.data) {
        return (
            <div className="card-container-news">
                <div className="card-row-news">
                    {
                        newsData.data.map((news, index) => {
                            return(
                                <div className="card-news" key={index}>
                                    <div className="container">
                                        <h3 className="card-news__title">{news.title}</h3>
                                        <p>Autor: {news.author || "Anonimo"}</p>
                                        <p>Categoria {news.category || "Sin categoria" }</p>
                                    </div>
                                    <div className="row">
                                        <div className="card-descripcion">
                                            {news.description}
                                        </div>
                                        <div>
                                            <a href={news.url}>Fuente</a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
    return(<div>Noticias</div>)
}

export default CardNews;