import React, { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { ScatterBoxLoaderComponent } from "./components/Loader";
import Login from "./components/Login";
import Main from "./components/Main";
import { useStateValue } from "./providers/StateProvider";
const App = () => {
  const [{ user }, dispatch] = useStateValue();

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);
  return (
    <>
      {user || <Login />}
      {user && (
        <>
          {isLoading && (
            <div className="react_loader">
              <ScatterBoxLoaderComponent />
            </div>
          )}
          {isLoading || <Main />}
        </>
      )}
    </>
  );
};

export default App;
