export default function handler(req, res) {
  const facts = [
    { 
      title: "Internet speed evolution",
      subtitle: "100 Mbps average speed in 2025, compared to just 0.05 Mbps in 2000" 
    },
    { 
      title: "Internet access growth",
      subtitle: "92% household penetration in 2025, up from 7% in 2000" 
    },
    { 
      title: "Public Wi-Fi Expansion",
      subtitle: "Over 20,000 public Wi-Fi hotspots available nationwide by 2025." 
    },
    { 
      title: "Mobile Internet Adoption",
      subtitle: "Over 85% of Argentinians access the internet via mobile devices as of 2025" 
    },
    { 
      title: "Fiber Optic Growth",
      subtitle: "More than 5 million households connected to fiber-to-the-home (FTTH) networks by 2025" 
    },
    { 
      title: "E-commerce Surge",
      subtitle: "Online sales exceeded USD 15 billion in 2023, reflecting a rapid shift to digital shopping" 
    }
  ];
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Cache-Control", "s-maxage=3600, stale-while-revalidate");
  res.status(200).json({ facts });
}
