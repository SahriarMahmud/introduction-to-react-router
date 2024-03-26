import { Link, useNavigate, useRouteError } from "react-router-dom";


const ErrorPage = () => {
    const error = useRouteError();
    const navigate = useNavigate();
    const handleErrorReturn = () => {
        navigate(`/`)
    }
    console.log(error)
    return (
        <div>
            <h2>Oops!!!</h2>
            <p>{error.statusText || error.message}</p>
            {
                error.status === 404 && <div>
                    <h3>page not found</h3>
                    <p>Go back where you came from</p>
                    <button onClick={handleErrorReturn}>Home</button>
                    <Link to={'/'}>HOme</Link>
                </div>
            }
        </div>
    );
};

export default ErrorPage;