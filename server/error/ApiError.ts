export class ApiError extends Error{
    public status: number;

    constructor(status: number, message: string) {
        super(message);
        this.status = status
    }

    static badRequest(message: string) {
        return new ApiError(404, message)
    }

    static internal(message: string) {
        return new ApiError(500, message)
    }

    static forbidden(message: string) {
        return new ApiError(403, message)
    }
}