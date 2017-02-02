export function buildError(response, data) {
    const message = data.message || 'Unexpected error';
    return {status: response.status, message, data}
}