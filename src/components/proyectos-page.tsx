import Link from "next/link";

type ProyectoItem = {
  titulo: string;
  id: string;
  stack: [];
  thumbnail: string;
};

export default function ProyectosPage(props: { proyectos: ProyectoItem[] }) {
  return (
    <>
      <section className="relative mt-20 h-auto md:h-screen">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-3/4 m-auto">
          {props.proyectos.map((item, index) => (
            <Link
              key={index}
              className="m-auto"
              href={`/proyectos/${item.id}`}
              target="_self"
              rel="noopener noreferer"
            >
              <div className="relative" key={index}>
                <img
                  className="rounded-lg"
                  src={item.thumbnail}
                  alt={item.titulo}
                />
                <div className="absolute inset-0 rounded-lg flex items-center justify-center opacity-0 transition duration-400 ease-in-out hover:opacity-100  bg-neutral-800 p-4 bg-opacity-90">
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
                    <h3 className="text-xs mt-5">Click para ver detalle</h3>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
