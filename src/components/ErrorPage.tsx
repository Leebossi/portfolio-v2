import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import Peon from "./Peon";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);
    let errorMessage;

    if (isRouteErrorResponse(error)) {
        errorMessage = `${error.status} ${error.statusText}`
    } else if (error instanceof Error) {
        errorMessage = error.message
    } else if (typeof error === 'string') {
        errorMessage = error
    } else {
        console.error(error)
        errorMessage = 'Unknown error'
    }

    return (
        <div className="page" id="error-page">
            <h2>Oops!</h2>
            <Peon />
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{errorMessage}</i>
            </p>
        </div>
    );
}