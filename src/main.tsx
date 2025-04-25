
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Add error boundary for better debugging
const rootElement = document.getElementById("root");

if (!rootElement) {
  console.error("Failed to find the root element");
} else {
  try {
    const root = createRoot(rootElement);
    root.render(<App />);
    console.log("Application successfully rendered");
  } catch (error) {
    console.error("Failed to render the application:", error);
  }
}
