import ProyectosPage from "@yuri-web-portfolio/components/proyectos-page";
import { getData } from "@yuri-web-portfolio/firebase/data";

export async function getServerSideProps() {
  const proyectos = await getData("proyectos");

  return {
    props: {
      proyectos: proyectos,
    },
  };
}

export default function index(props: { proyectos: [] }) {
  return (
    <>
      <ProyectosPage proyectos={props.proyectos} />
    </>
  );
}
