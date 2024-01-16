import ActiveLabel from "./components/active-lable";
import NotActiveLabel from "./components/not-active-label";

export default function Home() {
  return (
    <main>
      <h1 className="text-4xl">Home page</h1>
      <ActiveLabel>Active</ActiveLabel>
      <NotActiveLabel>Not active</NotActiveLabel>
    </main>
  );
}
