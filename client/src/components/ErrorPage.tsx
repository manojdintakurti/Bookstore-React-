import React from "react"
import "../CSS/ErrorPage.css"

function ErrorPage(){
    return (
        <div className="error-page">
            <div>
                <h1>Oops! Something Went Wrong</h1>
                <p>We apologize for the inconvenience. An error has occurred on our website.</p>
                <p>Please try again later or contact our support team if the problem persists.</p>

            </div>
        </div>
    );
}
export default ErrorPage;