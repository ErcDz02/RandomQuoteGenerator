import ReactDOM from "react-dom";
import RandomQuote from "./RandomQuote";
import Header from "./Header";
import Footer from "./Footer";

function Main() {
  return (
    <div>
      <Header />
      <RandomQuote />
      <Footer />
    </div>
  );
}

ReactDOM.render(<Main />, document.getElementById("root"));
