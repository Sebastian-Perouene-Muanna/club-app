import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const base = import.meta.env.BASE_URL;

export default function Home() {
  const noticias = [
    {
      titulo: "¡Victoria en casa!",
      descripcion: "El Club Atlético Lamarque ganó 3-1 contra Deportivo Beltrán.",
      disciplina: "Fútbol",
      imagen: `${base}notihome/noti1.png`,
    },
    {
      titulo: "¡Vóley femenino invicto!",
      descripcion: "Gran desempeño del equipo Sub-16 en la liga regional.",
      disciplina: "Vóley",
      imagen: `${base}notihome/noti2.png`,
    },
    {
      titulo: "Nuevo equipo de básquet juvenil",
      descripcion: "Presentación oficial del plantel Sub-18 de básquet.",
      disciplina: "Básquet",
      imagen: `${base}notihome/noti3.png`,
    },
    {
      titulo: "Obras en la sede social",
      descripcion: "Se iniciaron mejoras edilicias para optimizar espacios de entrenamiento.",
      disciplina: "Institucional",
      imagen: `${base}notihome/noti4.png`,
    },
  ];

  const resultados = [
    { deporte: "Fútbol", resultado: "C.A. Lamarque 3 - 1 Beltrán", fecha: "Fecha 6" },
    { deporte: "Vóley", resultado: "Lamarque Sub-16 2 - 0 Choele Voley", fecha: "Fecha 5" },
    { deporte: "Básquet", resultado: "Lamarque Juvenil 68 - 55 Darwin BC", fecha: "Fecha 4" },
  ];

  const fixture = [
    { fecha: "Dom. 28/04", local: "C.A. Lamarque", visitante: "Choele FC", hora: "18:00" },
    { fecha: "Sáb. 04/05", local: "Beltrán", visitante: "C.A. Lamarque", hora: "16:30" },
    { fecha: "Dom. 12/05", local: "C.A. Lamarque", visitante: "Pomona", hora: "18:00" },
  ];

  const tablaFutbol = [ /* ... */ ];
  const tablaVoley = [ /* ... */ ];
  const tablaBasquet = [ /* ... */ ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-20">
      {/* Carrusel de Noticias */}
      <Slider {...sliderSettings}>
        {noticias.map((n, i) => (
          <div key={i} className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-lg">
            <img
              src={n.imagen}
              alt={n.titulo}
              className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full object-cover"
              style={{ minWidth: "100%" }}
            />
            <div className="absolute bottom-0 bg-black bg-opacity-70 w-full p-6 text-white">
              <span className="text-xs bg-azulgrana-rojo px-2 py-1 rounded-full">
                {n.disciplina}
              </span>
              <h2 className="text-2xl font-bold">{n.titulo}</h2>
              <p className="text-sm">{n.descripcion}</p>
            </div>
          </div>
        ))}
      </Slider>

      {/* Últimos Resultados + Fixture */}
      <section className="grid md:grid-cols-2 gap-8">
        {/* Últimos Resultados */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-2xl font-extrabold text-center text-azulgrana-azul mb-6">
            Resultados Recientes
          </h3>
          <ul className="space-y-4">
            {resultados.map((r, i) => (
              <li key={i} className="border-b pb-3">
                <div className="flex justify-between items-center">
                  <span className="font-bold">{r.deporte}</span>
                  <span className="text-sm text-gray-500">{r.fecha}</span>
                </div>
                <p className="text-center text-gray-800">{r.resultado}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Fixture */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-2xl font-extrabold text-center text-azulgrana-azul mb-6">
            Próximos Partidos
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-center text-sm text-gray-700">
              <thead className="bg-gray-100">
                <tr>
                  <th>Fecha</th>
                  <th>Local</th>
                  <th>Visitante</th>
                  <th>Hora</th>
                </tr>
              </thead>
              <tbody>
                {fixture.map((f, i) => (
                  <tr key={i} className="border-b">
                    <td>{f.fecha}</td>
                    <td>{f.local}</td>
                    <td>{f.visitante}</td>
                    <td>{f.hora} hs</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Tablas de Posiciones */}
      <section className="space-y-16">
        <h3 className="text-3xl font-extrabold text-center text-azulgrana-azul">
          Tablas de Posiciones
        </h3>
        {/* ... */}
      </section>

      {/* Noticias Anteriores */}
      <section>
        <h3 className="text-2xl font-extrabold text-center text-azulgrana-azul mb-8">
          📰 Noticias Anteriores
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {noticias.map((n, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:scale-105 transform transition-all duration-300"
            >
              <img
                src={n.imagen}
                alt={n.titulo}
                className="h-40 w-full object-cover"
              />
              <div className="p-4">
                <span className="text-xs bg-azulgrana-rojo px-2 py-1 rounded-full text-white">
                  {n.disciplina}
                </span>
                <h4 className="font-bold text-lg mt-2">{n.titulo}</h4>
                <p className="text-sm text-gray-600">{n.descripcion}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

// El componente TablaPosiciones queda igual…
