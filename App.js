import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import HomeScreen from "./screens/HomeScreen";
import ShowScreen from "./screens/showScreen";
import CreateScreen from "./screens/createScreen";
import { Provider } from "./context/BlogContext";
import EditScreen from "./screens/editScreen";

const navigate = createStackNavigator(
  {
    Home: HomeScreen,
    Show: ShowScreen,
    Create: CreateScreen,
    Edit: EditScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Blog App",
    },
  }
);

const App = createAppContainer(navigate);

export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  );
};
