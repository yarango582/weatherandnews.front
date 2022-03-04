import "./style.css"

const Header = ({setCityName}) => {

    const handleOnChange = (e) => {
        let cityName = e.target.value;
        setCityName(cityName);
    }
    return (
        <header className="header">
            <div className="header-title">
                <h2 className="header-title__text">
                    Weather And News
                </h2>
            </div>
            <div className="header-search">
                <input
                    className="header-search__input" 
                    type="text" 
                    name="search" 
                    id="search" 
                    placeholder="nombre de ciudad"
                    onChange={handleOnChange}
                />
            </div>
        </header>
    )
}

export default Header;