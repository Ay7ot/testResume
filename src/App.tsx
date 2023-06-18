import Template1 from "./Components/Template1";
import UserDetails from "./Components/UserDetails";



function App() {

  return (
    <div className="lg:flex justify-between">
      <div className="lg:w-[50%]"><UserDetails /></div>
      <div className="hidden lg:block bg-gray-300 min-h-screen"><Template1 /></div>
    </div>
  )
}

export default App
