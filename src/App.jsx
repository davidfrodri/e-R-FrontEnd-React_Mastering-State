import { useContext, useEffect } from "react";
import Context from "./context/Provider";

import Headline from "./components/Headline/Headline";
import Main from "./components/Main/Main";
import Stories from "./components/Stories/Stories";
import Footer from "./components/Footer/Footer";

function App() {
  const { data } = useContext(Context)

  useEffect(() => {
    console.log(data)
  }, [data])
  
  return (
    <>
      <Headline />
      <Main />
      <Stories />
      <Footer />
    </>
  );
}

export default App;
