import { getDetail } from "@yuri-web-portfolio/firebase/data";
import Link from "next/link";

type ProyectoItem = {
  id: string;
  titulo: string;
  stack: [];
  imagen: string;
  enlaces: [];
  descripcion: string;
  desarrollo: string;
};

export async function getServerSideProps(props: { query: { slug: string } }) {
  const detail = await getDetail(props.query.slug);
  return {
    props: {
      detail: detail,
    },
  };
}

export default function ProyectoDetailpage(props: { detail: ProyectoItem }) {
  return (
    <>
      <section className="mt-20 mx-auto md:w-3/4 h-auto  ">
        <div className="relative">
          <img src={props.detail.imagen} />
          <div className=" flex md:flex-row justify-between">
            <h2 className="text-4xl font-semibold p-1">
              {props.detail.titulo}
            </h2>
            <Link href="/proyectos">
              <p className="uppercase bg-palerose rounded-md text-white mt-1 p-1 hover:text-palerose hover:bg-white">
                Volver
              </p>
            </Link>
          </div>
        </div>
        <div className="flex mt-3">
          <img
            src="/imgs/code-desktop-svgrepo-com.svg"
            className="h-10 w-10 rounded-full mr-2 object-cover self-center"
          />
          <div>
            <div className="flex flex-row flex-wrap mb-1 ">
              {props.detail.stack.map((stack, index) => (
                <p
                  key={index}
                  className="bg-gray-100 text-gray-700 text-md p-1 m-1 rounded-full border-2 "
                >
                  {stack}
                </p>
              ))}
            </div>
            <div className="flex flex-row ">
              {props.detail.enlaces.map((item, index) => (
                <Link
                  key={index}
                  className=" bg-gold p-2 mx-1 text-white rounded-md hover:bg-opacity-20 hover:text-gold uppercase"
                  href={item}
                  target="_blank"
                  rel="noopener noreferer"
                >
                  {index === 0 ? "En vivo" : "Código"}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="px-1 mt-12 mx-auto ">
          <p className="">{props.detail.descripcion}</p>
          <p className="">{props.detail.desarrollo}</p>
        </div>
      </section>
    </>
  );
}
