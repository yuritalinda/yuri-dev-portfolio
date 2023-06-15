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
        <div className="m-auto">
          <h2 className="text-3xl">{props.inicio.titulo}</h2>
          <h1>{props.inicio.subtitulo}</h1>
          <p className="">{props.inicio.parrafo}</p>
        </div>
        <div className="m-auto">
          <img
            src={props.inicio.imagen}
            className="w-3/4 mx-auto"
            alt={"Avatar Yuri B"}
          />
        </div>
      </header>
    </>
  );
}
