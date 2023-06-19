import Link from "next/link";

type ProyectoItem = {
  titulo: string;
  descripcion: string;
  enlaces: [];
  stack: [];
  imagen: string;
};

export default function Proyectos(props: { proyectos: ProyectoItem[] }) {
  return (
    <>
      <section className="block h-auto relative mb-10" id="proyectos">
        <h2 className="text-3xl font-semibold w-fit underline decoration-8 decoration-yellow mb-10">
          Mis Proyectos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {props.proyectos.map((item, index) => (
            <div className="relative " key={index}>
              <img
                className="h-auto max-w-full rounded-lg"
                src={item.imagen}
                alt={item.titulo}
              />
              <div className="absolute inset-0 rounded-lg flex items-center justify-center opacity-0 transition duration-400 ease-in-out hover:opacity-100 bg-yellow p-4 bg-opacity-90">
                <div className=" text-white text-center">
                  <h3 className="text-xl font-bold">{item.titulo}</h3>
                  <div className="flex flex-row">
                    {item.stack.map((stack, index) => (
                      <p
                        key={index}
                        className="bg-white m-1 p-2 rounded-full text-gray-700 text-xs"
                      >
                        {stack}
                      </p>
                    ))}
                  </div>
                  <div className="flex flex-row mt-5 justify-evenly">
                    {item.enlaces.map((enlace, index) => (
                      <Link
                        key={index}
                        className=" bg-brickred p-3 mx-1 rounded-lg hover:bg-white hover:text-brickred"
                        href={enlace}
                        target="_blank"
                        rel="noopener noreferer"
                      >
                        {index === 0 ? "En vivo" : "Código"}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
