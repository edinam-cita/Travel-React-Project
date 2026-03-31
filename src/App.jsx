import Header from "./Components/Header";
import Entry from "./Components/Entry";
import data from "./data";

export default function App() {
  const travelCities = data.map((travel) => {
    return <Entry key={travel.id} {...travel} />;
  });

  return (
    <>
      <Header />
      <main className="container">{travelCities}</main>
    </>
  );
}
