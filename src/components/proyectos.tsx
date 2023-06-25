import Link from "next/link";

type ProyectoItem = {
  titulo: string;
  stack: [];
  thumbnail: string;
};

export default function Proyectos(props: { proyectos: ProyectoItem[] }) {
  return (
    <>
      <section className="block h-auto relative mb-10" id="proyectos">
        <h2 className="text-3xl font-semibold w-fit underline decoration-8 decoration-yellow mb-2">
          Mis Proyectos
        </h2>
        <h3 className="mb-5">
          Algunos de mis proyectos personales y profesionales. Haz click en ver
          más.
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {props.proyectos.slice(3, 6).map((item, index) => (
            <div className="relative " key={index}>
              <img
                className="m-auto rounded-lg"
                src={item.thumbnail}
                alt={item.titulo}
              />
              <div className="absolute inset-0 rounded-lg flex items-center justify-center opacity-0 transition duration-400 ease-in-out hover:opacity-100 bg-neutral-800 bg-opacity-90">
                <div className=" text-white text-center">
                  <h3 className="text-xl font-bold">{item.titulo}</h3>
                  <div className="flex flex-row">
                    {item.stack.slice(0, 3).map((stack, index) => (
                      <p
                        key={index}
                        className="bg-white m-1 p-2 rounded-full text-gray-700 text-xs"
                      >
                        {stack}
                      </p>
                    ))}
                  </div>
                  <div className="flex flex-row mt-5 justify-evenly">
                    <Link
                      key={index}
                      className=" bg-gold p-2 mx-1 rounded-md hover:bg-white hover:text-gold uppercase"
                      href={"/proyectos"}
                      target="_self"
                      rel="noopener noreferer"
                    >
                      Ver más
                    </Link>
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
