export function navBar(icon, title, links) {
    return {
        type: "navbar",
        data: {
            icon: icon,
            title: title,
            links: links
        }
    }
}

export function navBarLink(text, destination) {
    return {
        text: text,
        url: destination
    };
}
