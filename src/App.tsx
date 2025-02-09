import { ThemeProvider } from '@/components/theme-provider';
import SignatureGenerator from '@/components/signature-generator';

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <div className="min-h-screen bg-background">
        <SignatureGenerator />
      </div>
    </ThemeProvider>
  );
}

export default App;