import Nav from "./Nav";

const MENU_ITEMS = [
  {
    text: "Solarwinds",
    icon: "hand point right outline",
    href: "https://www.solarwinds.com",
  },
  {
    text: "Other Tech Companies",
    icon: "question circle",
    subItems: [
      {
        text: "Google",
        href: "https://www.google.com",
      },
      {
        text: "Amazon",
        href: "https://www.amazon.com",
      },
      {
        text: "Microsoft",
        href: "https://www.microsoft.com",
      },
    ],
  },
];

const App = () => <Nav.Builder items={MENU_ITEMS} />;

export default App;
