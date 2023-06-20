import Link from "next/link";

type ProyectoItem = {
  titulo: string;
  descripcion: string;
  enlaces: [];
  stack: [];
  imagen: string;
};

export default function ProyectosPage(props: { proyectos: ProyectoItem[] }) {
  return (
    <>
      <section className="relative mt-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {props.proyectos.map((item, index) => (
            <div className="relative" key={index}>
              <img className="rounded-lg" src={item.imagen} alt={item.titulo} />
              <div className="absolute inset-0 rounded-lg flex items-center justify-center opacity-0 transition duration-400 ease-in-out hover:opacity-100  bg-neutral-800 p-4 bg-opacity-90">
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
                    <Link
                      key={index}
                      className=" bg-brickred p-3 mx-1 rounded-lg hover:bg-white hover:text-brickred"
                      href={`/proyectos/${item.titulo}`}
                      target="_self"
                      rel="noopener noreferer"
                    >
                      Detalle
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
