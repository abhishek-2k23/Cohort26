class ApiError extends Error {
    constructor(public status: number, message: string) {
        super(message);
    }

    static badRequest(message = "bad request"){
        return new ApiError(400, message);
    }

    static notFound(message = "not found"){
        return new ApiError(404, message);
    }

    static serverError(message = "server Error"){
        return new ApiError(500, message);
    }
}

export default ApiError;