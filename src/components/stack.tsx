type StackItem = {
  nombre: string;
  imagen: string;
};

export default function Stack(props: { stack: StackItem[] }) {
  console.log(props.stack);
  return (
    <>
      <section>
        <h2>He trabajado con...</h2>
        <div className="grid grid-cols-4">
          {props.stack.map((item, index) => (
            <div key={index} className="w-1/4 ">
              <h3>{item.nombre}</h3>
              <img src={item.imagen} alt={item.nombre} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
