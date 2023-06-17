import { getData } from "@yuri-web-portfolio/firebase/data";
import Inicio from "@yuri-web-portfolio/components/inicio";
import Proyectos from "@yuri-web-portfolio/components/proyectos";
import Aboutme from "@yuri-web-portfolio/components/aboutme";
import Stack from "@yuri-web-portfolio/components/stack";

export async function getServerSideProps() {
  const inicio = await getData("inicio");
  const proyectos = await getData("proyectos");
  const aboutme = await getData("aboutme");
  const stack = await getData("experiencia");
  return {
    props: {
      inicio: inicio[0],
      proyectos: proyectos,
      aboutme: aboutme[0],
      stack: stack,
    },
  };
}

export default function Home(props: {
  inicio: any;
  proyectos: [];
  aboutme: any;
  stack: [];
}) {
  console.log(props.stack);
  return (
    <>
      <div className="md:w-3/4 m-auto">
        <Inicio inicio={props.inicio} />
        <Proyectos proyectos={props.proyectos} />
        <Aboutme aboutme={props.aboutme} />
        <Stack />
      </div>
    </>
  );
}
