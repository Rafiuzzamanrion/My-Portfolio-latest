import {useEffect, useState} from "react";




const App = () => {


    const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate an asynchronous operation (e.g., fetching data) that takes some time.
    // Replace this with your actual initialization logic.
    setTimeout(() => {
      setLoading(false); // Set loading to false when the operation is complete.
    }, 3500); // Simulating a 2-second loading delay
  }, []);
    return [loading]
};

export default App;