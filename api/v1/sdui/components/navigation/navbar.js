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

// had to remove this one due to free plan limitations
//export function navBarLink(text, destination) {
//    return {
//        text: text,
//        url: destination
//    };
//}
