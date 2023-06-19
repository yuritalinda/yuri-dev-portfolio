type AboutmeItem = {
  titulo: string;
  subtitulo: string;
  imagen: string;
};

export default function Aboutme(props: { aboutme: AboutmeItem }) {
  return (
    <>
      <section
        className="relative flex flex-col md:flex-row md:justify-center h-auto"
        id="aboutme"
      >
        <div className="m-auto md:w-3/4 pr-10">
          <h2 className="text-3xl font-semibold w-fit underline decoration-8 decoration-palerose">
            {props.aboutme.titulo}
          </h2>
          <p className="text-justify mt-5">{props.aboutme.subtitulo}</p>
        </div>
        <div className="m-auto md:w-1/4">
          <img src={props.aboutme.imagen} className="" alt="img" />
        </div>
      </section>
    </>
  );
}
