import PixalatedTransition from "../components/Foreground/PixalatedTransition";
import IllitLogo from "../components/UI/AnimatedSprites/IllitLogo";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <div className="max-w-7xl mx-auto relative max-h-max overflow-hidden lg:overflow-visible">
        <IllitLogo />
        <main>
          <Outlet />
        </main>
      </div>
      <PixalatedTransition />
    </>
  );
}
