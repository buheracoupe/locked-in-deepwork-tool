import Header from "./components/Header";
import ClockContainer from "./components/ClockContainer";
import SettingsModal from "./components/SettingsModal";
import { useSelector, useDispatch } from "react-redux";
import { toggleSettings } from "./Redux/slices/settingsSlice";
import FaqSection from "./components/FaqSection"



function App() {
  const dispatch = useDispatch();
  const isSettingsShowing = useSelector((state) => state.settings.settingsShowing)

  function handleClick(){
    if(isSettingsShowing){
      dispatch(toggleSettings(false))
    }
  }

  return (
    <div
     onClick={handleClick}
     className="App font-quicksand w-full">
      <SettingsModal />
      <section className="h-lvh w-full bg-primaryLight">
      <Header />
      <main className=" bg-primaryLight w-full">
      <ClockContainer />
      </main>
      </section>
    {isSettingsShowing && <div className="overlay fixed left-0 top-0 w-full h-full bg-[rgba(0,0,0,0.5)] "></div>}
    <FaqSection />
    </div>
  );
}

export default App;
