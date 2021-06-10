import Header from "../header";
import "./app.css";

const App = () => {
    return (
        <>
            <Header/>
            <div className="main">
                <h2 className="main__title title">Привет</h2>
                <p className="main__date date">10 июня 2021 Четверг</p>
            </div>
        </>
    )
}

export default App;