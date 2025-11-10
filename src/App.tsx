import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Layout from "./pages/Layout";
import AlbumPage from "./pages/AlbumPage";
import { AnimatePresence } from "motion/react";
import MembersPage from "./pages/MembersPage";

const SRM_DATA = {
  path: "/srm",
  title: ["SUPER", "REAL", "ME"],
  strokeClass: "SRMStroke",
  tracks: [
    "My World",
    "Magnetic",
    "Midnight Fiction",
    "Lucky Girl<br/>Syndrome",
  ],
  year: 2024,
  albumCover: "./images/covers/cover-srm.jpg",
};

const ILY_DATA = {
  path: "/ily",
  title: ["I'LL", "LIKE", "YOU"],
  strokeClass: "ILYStroke",
  tracks: ["I'll Like You", "Cherish", "IYKYK", "Pimple", "Tick-Tack"],
  year: 2024,
  albumCover: "./images/covers/cover-ily.jpg",
};

const BOMB_DATA = {
  path: "/bomb",
  title: ["bomb"],
  strokeClass: "bombStroke",
  tracks: ["Little Monster", "Do the Dance", "oops!", "밤소풍", "Jellyous"],
  year: 2025,
  albumCover: "./images/covers/cover-bomb.jpg",
};

const ALBUMS_PAGES = [SRM_DATA, ILY_DATA, BOMB_DATA];

function App() {
  const router = createBrowserRouter([
    {
      path: "/ibbit/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <LandingPage />,
        },
        ...ALBUMS_PAGES.map((album) => ({
          path: album.path,
          element: (
            <AlbumPage
              title={album.title}
              strokeClass={album.strokeClass}
              tracks={album.tracks}
              year={album.year}
              albumCover={album.albumCover}
            />
          ),
        })),
        {
          path: "/members",
          element: <MembersPage />,
        },
      ],
    },
  ]);

  return (
    <AnimatePresence mode="wait">
      <RouterProvider router={router} />
    </AnimatePresence>
  );
}

export default App;
