export class ApiError extends Error {
    constructor(url: string, status: number, time: any) {
        super(`${time}: Error fetching ${url}: ${status}`);
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, ApiError);
        }
        this.name = "ApiError";
        this.status = status;
    }
}

export async function fetchFromApi(url: string) {
    const response = await fetch(url);
    if (!response.ok) {
        let time = new Date().toJSON();
        throw new ApiError(url, response.status, time);
    }
    const json = await response.json();
    return json;
}
