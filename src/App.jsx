import "./App.css";
import Book from "./componenets/Book";
import Header from "./componenets/Header";
import Table from "./componenets/Table";

function App() {
  return (
    <div className="bg-[url(../src/assets/banner.jpg)] bg-cover bg-no-repeat">
      <Header />
      <section className="h-screen">
        <Book />
        <Table />
      </section>
    </div>
  );
}

export default App;
