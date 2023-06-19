/* eslint-disable @next/next/no-img-element */

type InicioItem = {
  titulo: string;
  subtitulo: string;
  parrafo: string;
  imagen: string;
};
export default function Inicio(props: { inicio: InicioItem }) {
  return (
    <>
      <header className="relative flex flex-col md:flex-row md:justify-center h-screen">
        <div className="m-auto md:w-3/4 pr-10">
          <h2 className="text-3xl font-semibold w-fit underline decoration-8 decoration-palerose">{props.inicio.titulo}</h2>
          <h1 className="text-2xl">{props.inicio.subtitulo}</h1>
          <p className=" text-justify mt-2">{props.inicio.parrafo}</p>
        </div>
        <div className="m-auto md:w-1/2 ">
          <img
            src={props.inicio.imagen}
            className="w-3/4 mx-auto rounded-full bg-palerose"
            alt={"Avatar Yuri B"}
          />
        </div>
      </header>
    </>
  );
}
