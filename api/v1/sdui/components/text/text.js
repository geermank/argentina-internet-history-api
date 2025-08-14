
export function title(value) {
    return {
        type: "title",
        data: {
            text: value
        }
    };
}

export function subtitle(value) {
    return {
        type: "subtitle",
        data: {
            text: value
        }
    };
}

export function paragraph(value) {
    return {
        type: "paragraph",
        data: {
            text: value
        }
    };
}