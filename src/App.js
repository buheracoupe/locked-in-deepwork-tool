import Header from "./components/Header";
import ClockContainer from "./components/ClockContainer";
import TypedDisplay from "./components/TypedDisplay";



function App() {
  return (
    <div className="App font-quicksand w-full">
      <section className="h-lvh w-full bg-primaryLight">
      <Header />
      <main className=" bg-primaryLight w-full">
      <ClockContainer />
      </main>
      </section>

          
      

    </div>
  );
}

export default App;
