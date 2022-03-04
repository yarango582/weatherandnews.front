import "./style.css";
import { default as Card } from "../Card/Card.News";

const  ContainerNews = ({newsData}) => {
    return(
        <div className="container-news">
            <Card newsData={newsData}/>
        </div>
    )
}

export default ContainerNews;