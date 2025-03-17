import type { Route } from "./+types/home";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "Vacancies" },
    { name: "description", content: "Vacancies" },
  ];
}

export default function Home() {
  return <h1>Тут мои вакансии</h1>;
}