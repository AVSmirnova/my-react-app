import { type RouteConfig, route } from "@react-router/dev/routes";

export default [
    route("/","routes/home.tsx"),
    route("/about","routes/about.tsx"),
    route("/doc","routes/doc.tsx"),
    route("/contact","routes/contact.tsx"),
    route("/vacancie","routes/vacancie.tsx"),
] satisfies RouteConfig;
