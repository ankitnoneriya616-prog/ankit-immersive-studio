import { KageLandingPage } from "@designcodeio/threeui";
import "@designcodeio/threeui/style.css";

export default function App() {
  return (
    <main className="kage-app" aria-label="Kage landing page">
      <KageLandingPage
        headingFont="onest"
        bodyFont="onest"
        headingWeight="400"
        bodyWeight="300"
        primaryColor="#e0231c"
        headingSize={64}
        bodySize={20}
        headingLetterSpacing={0.098}
      />
    </main>
  );
}
