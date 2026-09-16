import useTheme from "../context/Theme";

export default function Home({id}) {
  const { themeMode } = useTheme();

  return (
    <section
      id={id}
      className="h-dvh"
    >

      Home

      
    </section>
  );
}
