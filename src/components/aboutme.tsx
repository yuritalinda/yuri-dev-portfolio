type AboutmeItem = {
  titulo: string;
  subtitulo: string;
  imagen: string;
};

export default function Aboutme(props: { aboutme: AboutmeItem }) {
  return (
    <>
      <section className="relative flex flex-col md:flex-row md:justify-center h-auto">
        <div className="m-auto">
          <h2>{props.aboutme.titulo}</h2>
          <p>{props.aboutme.subtitulo}</p>
        </div>
        <div className="m-auto">
          <img src={props.aboutme.imagen} className="w-52" />
        </div>
      </section>
    </>
  );
}
