import Header from "./components/Header";
import ClockContainer from "./components/ClockContainer";
import SettingsModal from "./components/SettingsModal";
import { useSelector, useDispatch } from "react-redux";
import { toggleSettings } from "./Redux/slices/settingsSlice";



function App() {
  const dispatch = useDispatch();
  const isSettingsShowing = useSelector((state) => state.settings.settingsShowing)

  function handleClick(){
    if(isSettingsShowing){
      dispatch(toggleSettings("false"))
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

          
      

    </div>
  );
}

export default App;
