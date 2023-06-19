type StackItem = {
  nombre: string;
  imagen: string;
};

export default function Stack(props: { stack: StackItem[] }) {
  return (
    <>
      <section>
        <h2 className="text-3xl font-semibold w-fit underline decoration-8 decoration-gold" >Mis habilidades</h2>
        <div className="flex flex-wrap items-center justify-around gap-1 mt-5">
          {props.stack.map((item, index) => (
            <div key={index} className=" w-1/5">
              <img
                src={item.imagen}
                alt={item.nombre}
                className=" w-1/2 md:w-1/4 m-auto"
              />
              <h3 className=" text-center">{item.nombre}</h3>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
