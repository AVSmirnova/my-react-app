import type { Route } from "./+types/home";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "Contacts" },
    { name: "description", content: "Contacts" },
  ];
}

export default function Home() {
  return <h1>Тут мои контакты</h1>;
}