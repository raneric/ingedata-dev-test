import { AppPath } from "../../../utils/appConstant";
import NavBar from "../../components/nav/NavBar";
import Hero from "../../components/hero/Hero";
import Features from "../../components/features/Features";

function Home() {
  const linkList = [
    {
      path: AppPath.public.home,
      label: "Home",
    },
    {
      path: "#",
      label: "Room list",
    },
    {
      path: "#",
      label: "Contact",
    },
    {
      path: `#`,
      label: "About us",
    },
  ];

  return (
    <>
      <NavBar linkList={linkList} />
      <main>
        <Hero />
        <Features />
      </main>
    </>
  );
}

export default Home;
