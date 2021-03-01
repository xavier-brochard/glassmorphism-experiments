import Background from "./components/Background";
import Title from "./Title";
import Item from "./components/Item";
import Layout from "./Layout";
import { ReactComponent as Clarity } from "./components/clarity.svg";
import { ReactComponent as Depth } from "./components/depth.svg";
import { ReactComponent as Deference } from "./components/deference.svg";
import "./App.css";

function App() {
  return (
    <Background>
      <Layout
        title={<Title />}
        depthIllus={<Depth viewBox="0 0 800 1000" className="illus" />}
        clarityIllus={<Clarity viewBox="0 0 800 800" className="illus" />}
        deferenceIllus={<Deference viewBox="0 0 900 900" className="illus" />}
        depthCard={
          <Item
            title="Depth"
            description="Distinct visual layers and realistic motion convey hierarchy, impart vitality, and facilitate understanding. Touch and discoverability heighten delight and enable access to functionality and additional content without losing context. Transitions provide a sense of depth as you navigate through content."
          />
        }
        clarityCard={
          <Item
            title="Clarity"
            description="Throughout the system, text is legible at every size, icons are precise and lucid, adornments are subtle and appropriate, and a sharpened focus on functionality motivates the design. Negative space, color, fonts, graphics, and interface elements subtly highlight important content and convey interactivity."
          />
        }
        deferenceCard={
          <Item
            title="Deference"
            description="Fluid motion and a crisp, beautiful interface help people understand and interact with content while never competing with it. Content typically fills the entire screen, while translucency and blurring often hint at more. Minimal use of bezels, gradients, and drop shadows keep the interface light and airy, while ensuring that content is paramount."
          />
        }
      />
    </Background>
  );
}

export default App;
