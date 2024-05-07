import Header from "../components/Header";
import Navigation from "../components/Navigation";

export default function AllPage() {
  return (
    <div>
      <Header title="Welcum 2 my cool websait!!!" />

      <Navigation
        items={[
          { href: "/", name: "Index" },
          { href: "/button", name: "buttons" },
          { href: "/shoppinglist", name: "shoppinglist" },
          { href: "/thumbnail", name: "xoutube" },
          { href: "/worderverser", name: "wordreverser" },
        ]}
      />
    </div>
  );
}
