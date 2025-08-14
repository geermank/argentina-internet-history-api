export function sduiResponse(pageTitle, content) {
    return {
        page: {
            title: pageTitle,
            content: content
        }
    }
}