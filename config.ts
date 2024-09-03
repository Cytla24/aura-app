import themes from "daisyui/src/theming/themes";
import { ConfigProps } from "./types/config";

const config = {
  appName: "roastmyfit",
  appDescription:
    "Get your outfit roasted by AI and receive an Aura Score",
  domainName: "roastmy.fit",
  crisp: {
    id: "",
    onlyShowOnRoutes: ["/"],
  },
  stripe: {
    plans: [
      {
        priceId:
          process.env.NODE_ENV === "development"
            ? "price_1PqcSZFZWJ1HvbHHKaL1usVc"
            : "price_456",
        name: "Basic",
        description: "Get roasted 5 times a month",
        price: 5,
        priceAnchor: 10,
        features: [
          { name: "5 AI roasts per month" },
          { name: "Leaderboard access" },
          { name: "Basic profile customization" },
        ],
      },
      {
        priceId:
          process.env.NODE_ENV === "development"
            ? "price_1O5KtcAxyNprDp7iftKnrrpw"
            : "price_456",
        isFeatured: true,
        name: "Pro",
        description: "Unlimited roasts and premium features",
        price: 15,
        priceAnchor: 20,
        features: [
          { name: "Unlimited AI roasts" },
          { name: "Priority on leaderboard" },
          { name: "Advanced profile customization" },
          { name: "Exclusive AI-generated fashion tips" },
        ],
      },
    ],
  },
  aws: {
    bucket: "bucket-name",
    bucketUrl: `https://bucket-name.s3.amazonaws.com/`,
    cdn: "https://cdn-id.cloudfront.net/",
  },
  mailgun: {
    subdomain: "mg",
    fromNoReply: `ShipFast <noreply@mg.shipfa.st>`,
    fromAdmin: `Marc at ShipFast <marc@mg.shipfa.st>`,
    supportEmail: "marc@mg.shipfa.st",
    forwardRepliesTo: "marc.louvion@gmail.com",
  },
  colors: {
    theme: "dracula",
    main: themes["light"]["primary"],
  },
  auth: {
    loginUrl: "/api/auth/signin",
    callbackUrl: "/dashboard",
  },
} as ConfigProps;

export default config;
