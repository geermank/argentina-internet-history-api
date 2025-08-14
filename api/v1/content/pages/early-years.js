import { sduiResponse } from "../../sdui/response";
import { navBar, navBarLink } from "../../sdui/components/navigation/navbar";
import { title, paragraph } from "../../sdui/components/text/text"
import { Space, verticalSpace } from "../../sdui/components/spacing/verticalSpace";

export default function handler(req, res) {
    const firstParagraph = "Even though our journey starts in 1994, we have to first go a bit back in time. In particular to the year 1987, " +
        "year in which Argentina achieved a connection between its Ministry of Foreign Affairs and the University of Toronto. " +
        "This was the first internation communication of the country via e-mail, using the protocol UUCP. As a side note, " +
        "this connection was possible by first communicating via telephone. "

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Cache-Control", "s-maxage=3600, stale-while-revalidate");
    res.status(200).json(
        sduiResponse(
            "Early years",
            [
                navBar(
                    "assets/logo.png",
                    "The history of the Internet in Argentina",
                    [
                        navBarLink("Home", "index.html"),
                        navBarLink("Mass adoption", "index.html"),
                        navBarLink("Modern era", "index.html")
                    ]
                ),
                title("Early years"),
                paragraph(firstParagraph),
                verticalSpace(Space.Md),
                title("Commercial connections")
            ]
        )
    );
}
