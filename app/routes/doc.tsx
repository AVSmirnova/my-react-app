import type { Route } from "./+types/home";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "Documents" },
    { name: "description", content: "Documents" },
  ];
}

export default function Home() {
  return <h1>Тут мои документы</h1>;
}
