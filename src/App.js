import RouteMananger from "./Routes"
import UserContext from "./Context";
function App() {
  return (
    <UserContext>

      <RouteMananger/>
      
    </UserContext>
  );
}

export default App;