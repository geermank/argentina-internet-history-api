import { sduiResponse } from "../../sdui/response";
import { navBar, navBarLink } from "../../sdui/components/navigation/navbar";
import { title, subtitle, paragraph } from "../../sdui/components/text/text"
import { 
    firstParagraph,
    secondParagraph,
    thirdParagraph, 
    fourthParagraph, 
    fifthParagrah, 
    sixthParagraph, 
    seventhParagraph, 
    eighthParagraph,
    ninthParagraph
} from "./early-yeras-strings";

export default function handler(req, res) {
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
                title("Early years (1994 - 2005)"),
                paragraph(firstParagraph),
                paragraph(secondParagraph),
                paragraph(thirdParagraph),
                paragraph(fourthParagraph),
                subtitle("Commercial connections and beyond"),
                paragraph(fifthParagrah),
                paragraph(sixthParagraph),
                paragraph(seventhParagraph),
                paragraph(eighthParagraph),
                paragraph(ninthParagraph)
            ]
        )
    );
}
