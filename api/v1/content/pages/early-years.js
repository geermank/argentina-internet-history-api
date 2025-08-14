import { sduiResponse } from "../../sdui/response";
import { navBar, navBarLink } from "../../sdui/components/navigation/navbar";
import { title, subtitle, paragraph } from "../../sdui/components/text/text"
import { Space, verticalSpace } from "../../sdui/components/spacing/verticalSpace";
import { 
    firstParagraph,
    secondParagraph,
    thirdParagraph, 
    fourthParagraph, 
    fifthParagrah, 
    sixthParagraph, 
    seventhParagraph, 
    eighthParagraph
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
                verticalSpace(Space.Md),
                paragraph(secondParagraph),
                verticalSpace(Space.Md),
                paragraph(thirdParagraph),
                verticalSpace(Space.Md),
                paragraph(fourthParagraph),
                subtitle("Commercial connections and beyond"),
                paragraph(fifthParagrah),
                verticalSpace(Space.Md),
                paragraph(sixthParagraph),
                verticalSpace(Space.Md),
                paragraph(seventhParagraph),
                verticalSpace(Space.Md),
                paragraph(eighthParagraph)
            ]
        )
    );
}
