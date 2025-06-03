import "./App.css";
import { Providers } from "./app/providers/providers";
import { Routing } from "./pages/Routing/Routing";
import { Container } from "./shared/ui";

function App() {
  return (
    <Providers>
      <Container>
        <Routing />
      </Container>
    </Providers>
  );
}

export default App;
