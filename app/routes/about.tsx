import type { Route } from "./+types/home";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "About us" },
    { name: "description", content: "Welcome to About" },
  ];
}

export default function Home() {
  return <h1>Привет мир!!!</h1>;
}
