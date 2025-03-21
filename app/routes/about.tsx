import type { Route } from "./+types/home";
import { useLoaderData } from "react-router-dom";

type AboutData = {
  title: string;
  description: string;
  team: {name: string; role:string}[];
}
export function meta({}: Route.MetaArgs) {
  return [
    { title: "About us" },
    { name: "description", content: "Welcome to About" },
  ];
}

export function loader():AboutData {
  return {
    title: "О нас",
  description: "Информация о команде",
  team: [
    {name: "Ксения", role: "Frontend"},
    {name: "Андрей", role: "Инженер"},
    {name: "Артем", role: "Инженер"},
    {name: "Вячеслав", role: "Инженер 1 категории"},
    {name: "Виктор", role: "Системный архитектор"},
    {name: "Леонид", role: "FullStack"},
    {name: "Анастасия", role: "Преподаватель"},
    {name: "Егор", role: "FullStack"},
  ]
  }
}

export default function About() {
  const data = useLoaderData() as AboutData;
  return (
  <section className  = "about-container">
    <h1>{data.title}</h1>
    <p>{data.description} </p>
    <h2>Наша команда</h2>
    <ul>
      {data.team.map((member) => (
        <li> <strong> {member.name}</strong> - {member.role} </li>
      ))}
    </ul>
  </section>
  )
}
