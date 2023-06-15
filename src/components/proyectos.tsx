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
      <section className="block h-auto relative mb-5">
        <h2>pasa el cursor</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {props.proyectos.map((item, index) => (
            <div className="relative" key={index}>
              <img
                className="h-auto max-w-full rounded-lg"
                src={item.imagen}
                alt={item.titulo}
              />
              <div className="absolute inset-0 rounded-lg flex items-center justify-center opacity-0 transition duration-400 ease-in-out hover:opacity-90 bg-palerose p-4">
                <div className=" text-white">
                  <h3 className="text-lg font-bold">{item.titulo}</h3>
                  <p>{item.descripcion}</p>
                  <p>{item.stack.join(" ")}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
