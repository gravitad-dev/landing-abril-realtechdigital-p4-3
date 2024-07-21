import texts from '../../sections.json';

function Reviews() {
  return (
    <section className="relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6  md:flex items-center justify-center">
        {/* Hero content */}
        <div className="pt-20  ">
          <div className="flex lg:justify-start justify-center">
            <span
              style={{
                width: 'fit-content',
                color: '#6953D3',
                fontFamily: 'Space',
                marginBottom: '24px',
                backgroundColor: 'rgba(105, 83, 211, 0.1)',
                padding: '8px 16px 8px 16px',
              }}
              className="btn-sm text-gray-200 font-semibold  hover:bg-gray-800 rounded"
            >
              Testimonios
            </span>
          </div>
          {/* Section header */}
          <div className="text-left pb-12 md:pb-16">
            <h1
              className="text-5xl md:text-4.5xl font-semibold leading-tighter tracking-tighter mb-4 expressa"
              data-aos="zoom-y-out"
            >
              ¿Quiénes han confiado en nosotros?{' '}
            </h1>
            <div className="max-w-3xl mx-auto">
              <p
                className="text-xl text-gray-600 mb-8 text-left"
                data-aos="zoom-y-out"
                data-aos-delay="150"
              >
                Empresas líderes de diversos sectores han confiado en
                realtechdigital para mejorar sus operaciones e impulsar la
                innovación. Únase a nuestra creciente lista de clientes
                satisfechos que han experimentado los beneficios de nuestra
                experiencia en inteligencia artificial y automatización.
              </p>
              {/* Section 1 */}
              {/* <div
                className=" mx-auto flex justify-start"
                data-aos="zoom-y-out"
                data-aos-delay="300"
              >
                <div className="flex justify-start gap-12 mt-5 mb-7">
                  <div>
                    <a
                      className="flex flex-col text-center items-center  lg:pl-5 "
                      href="/#"
                    >
                      <div className=" flex  items-center justify-center w-16 h-16 ">
                        <img
                          src="https://res.cloudinary.com/db60chvpz/image/upload/v1715267494/Landings/iTech/jxaydmet8olhyq2mca4v.png"
                          alt="app"
                        />
                      </div>
                      <div className="">
                        <h2 className="text-[#5038C6] text-2xl font-bold">
                          2,5M+
                        </h2>
                        <h2 style={{ width: "150px" }}>
                          Downloaded and Installation
                        </h2>
                      </div>
                    </a>
                  </div>
                  <a
                    className="flex flex-col text-center items-center border-l lg:pl-10"
                    href="/#"
                  >
                    <div className=" flex  items-center justify-center w-16 h-16 ">
                      <img
                        src="https://res.cloudinary.com/db60chvpz/image/upload/v1715267494/Landings/iTech/qr61fszoib9hiysqb3hf.png"
                        alt="app"
                      />
                    </div>
                    <div className="">
                      <h2 className="text-[#5038C6] text-2xl font-bold">
                        4.8/5
                      </h2>
                      <div className="flex justify-center">
                        <img
                          src="https://res.cloudinary.com/db60chvpz/image/upload/v1715272606/Landings/iTech/snrfn6gqce22otawujrc.png"
                          alt="cc"
                        />
                      </div>
                      <h2 style={{ width: "150px" }}>Based on 1,258 reviews</h2>
                    </div>
                  </a>
                </div>
              </div> */}
              {/* Section 2 */}
              <div
                className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-start"
                data-aos="zoom-y-out"
                data-aos-delay="300"
              >
                <div className="flex justify-start gap-12">
                  <a
                    className="flex gap-2 items-center  text-white bg-[#6953D3] rounded-full px-6 py-4 hover:bg-gray-800 w-full sm:w-auto sm:ml-0"
                    href="https://blog.realtechdigital.xyz/contacto/"
                    target="_blank"
                  >
                    Contáctanos
                  </a>
                  <a
                    className="flex items-center"
                    href="https://blog.realtechdigital.xyz/"
                    target="_blank"
                  >
                    <div className="border rounded-full flex items-center justify-center w-14 h-14 mr-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#6953D3"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        // stroke="currentColor"
                        className="w-12 h-12 pl-1"
                      >
                        <title>Ver</title>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
                        />
                      </svg>
                    </div>
                    <a href="https://blog.realtechdigital.xyz/" target="_blank">
                      <h2>Explorar</h2>
                    </a>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:ml-10 mt-10 flex flex-col gap-5">
          {/* Card 1 */}
          <div className="card card-side bg-base-100 shadow-xl">
            <figure className="pl-6">
              <img
                src="https://res.cloudinary.com/db60chvpz/image/upload/v1715721395/iTech/vyjpd7gd4y8qwvvpoclw.png"
                alt="Movie"
              />
            </figure>
            <div className="card-body">
              <p>
                “Realtechdigital transformó nuestras operaciones con sus
                soluciones de inteligencia artificial, aumentando
                significativamente nuestra productividad y eficiencia”
              </p>
              <figure className="w-20">
                <img
                  src="https://res.cloudinary.com/db60chvpz/image/upload/v1715272606/Landings/iTech/snrfn6gqce22otawujrc.png"
                  alt="cc"
                />
              </figure>
              <h2>Jane Doe, directora ejecutiva de TechInnovate.</h2>
            </div>
          </div>

          {/* Card 2 */}
          <div className="card card-side bg-base-100 shadow-xl">
            <figure className="pl-6">
              <img
                src="https://res.cloudinary.com/db60chvpz/image/upload/v1715721394/iTech/uj8lfq1aezuaqsmutk8v.png"
                alt="Movie"
              />
            </figure>
            <div className="card-body">
              <p>
                “Las herramientas de automatización de realtechdigital han
                revolucionado nuestro flujo de trabajo, ahorrándonos tiempo y
                reduciendo costes”
              </p>
              <figure className="w-20">
                <img
                  src="https://res.cloudinary.com/db60chvpz/image/upload/v1715272606/Landings/iTech/snrfn6gqce22otawujrc.png"
                  alt="cc"
                />
              </figure>
              <h2>John Smith, director de operaciones de AutoSupply Co.</h2>
            </div>
          </div>
          {/* Card 3 */}
          <div className="card card-side bg-base-100 shadow-xl">
            <figure className="pl-6">
              <img
                src="https://res.cloudinary.com/db60chvpz/image/upload/v1715721394/iTech/jonurqljhspjzay75hau.png"
                alt="Movie"
              />
            </figure>
            <div className="card-body">
              <p>
                “Las plataformas de análisis de datos de Realtechdigital nos
                brindaron conocimientos invaluables, lo que nos permitió una
                mejor toma de decisiones y planificación estratégica.”
              </p>
              <figure className="w-20">
                <img
                  src="https://res.cloudinary.com/db60chvpz/image/upload/v1715272606/Landings/iTech/snrfn6gqce22otawujrc.png"
                  alt="cc"
                />
              </figure>
              <h2>
                Emily Johnson, directora de Data Insights de MarketLeaders.
              </h2>
            </div>
          </div>
          {/*  */}
        </div>
      </div>
    </section>
  );
}
export default Reviews;
