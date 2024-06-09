import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import { Box, Button, useColorMode } from "@chakra-ui/react";
import Index from "./pages/Index.jsx";
import AddPost from "./pages/AddPost.jsx"; // Import the new AddPost component

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const [isDarkMode, setIsDarkMode] = useState(colorMode === "dark");

  useEffect(() => {
    const savedColorMode = localStorage.getItem("chakra-ui-color-mode");
    if (savedColorMode) {
      setIsDarkMode(savedColorMode === "dark");
    }
  }, []);

  const handleToggle = () => {
    toggleColorMode();
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("chakra-ui-color-mode", !isDarkMode ? "dark" : "light");
  };

  return (
    <Router>
      <Box p={4} textAlign="right">
        <Button onClick={handleToggle}>
          {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </Button>
      </Box>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/add-post" element={<AddPost />} /> {/* Add route for AddPost */}
      </Routes>
    </Router>
  );
}

export default App;