import { Inter } from "next/font/google";
import { Roboto } from "next/font/google";
import Navbar from "./components/navbar";
import BottomMenu from "./components/bottommenu";
import Footer from "./components/footer";

const inter = Inter({ subsets: ["latin"] });
const robo = Roboto({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-roboto",
});

export const metadata = {
  title: "Nester Construction",
  description: "General Contracting",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={robo.variable}>
        <Navbar />
        <BottomMenu />
        {children}
        <Footer />
      </body>
    </html>
  );
}

/* onst useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", updatePosition);
    updatePosition();
    return () => window.removeEventListener("scroll", updatePosition);
  }, []);

  return scrollPosition;
}; */
