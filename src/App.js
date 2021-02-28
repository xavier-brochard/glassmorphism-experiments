import Background from "./components/Background";
import Card from "./components/Card";
import AnimatedCard from "./components/AnimatedCard";
import { ReactComponent as Delivery } from "./components/delivery.svg";

function App() {
  return (
    <Background>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          height: "100%",
        }}
      >
        <AnimatedCard>
          <Card
            title="Salut"
            description="Bonjour les gens, comment ça va?"
            illustration={
              <Delivery
                style={{
                  position: "absolute",
                  transform: "scale(.4) translate(-600px, -1200px)",
                  zIndex: 1,
                }}
              />
            }
          />
        </AnimatedCard>
      </div>
    </Background>
  );
}

export default App;
