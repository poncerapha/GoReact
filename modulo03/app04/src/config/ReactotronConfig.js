import Reactotron from "reactotron-react-js";
import { ReactotronRedux, reactotronRedux } from "reactotron-redux";

if (process.env.NODE_ENV === "development") {
  const tron = Reactotron.configure()
    .use(reactotronRedux())
    .connect();

  console.tron = tron;

  tron.clear();
}
