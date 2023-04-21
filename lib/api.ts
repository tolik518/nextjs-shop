export async function fetchFromApi(url: string) {
    const response = await fetch(url);
    if (response.status === 404) {
        throw new Error("Not Found");
    }
    const json = await response.json();
    return json;
}
