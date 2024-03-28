import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="container">
            <section className="content">
                <h1>Your Safe Travel Journey Is Our Goal.</h1>
                <p>Lorem ipsum dolor sit amet consecs assumenda eos dicta! fugiat vitae suscipit, facere amet delectus totam.</p>
                <Link to="/getticketform"><button>Get Tickets</button></Link>
            </section>
        </div>
    );
}


export default Home;