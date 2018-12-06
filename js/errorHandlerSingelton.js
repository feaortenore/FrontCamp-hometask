const errorHandlerSingelton = function () {
    if (!errorHandlerSingelton.instance) {
        errorHandlerSingelton.instance = errorHandlerSingelton;
        errorHandlerSingelton.instance.errorHandler = (error, container,) => {
            const messageElement = document.createElement('h3');
            messageElement.innerHTML = error.message;
            container.appendChild(messageElement);
        };
    }
    return errorHandlerSingelton.instance;
}

export default errorHandlerSingelton;
