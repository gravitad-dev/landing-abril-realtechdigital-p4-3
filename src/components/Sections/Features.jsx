import texts from "../../sections.json";

function Features() {
  return (
    <section className="relative max-w-6xl mx-auto px-4 sm:px-6">
      {/* Section 1 */}

      {/* Section 2 */}
      <div className="lg:text-left text-center  pb-12">
        <div
          style={{
            width: "fit-content",
            border: "1px groove #3F3F46",
            color: "#C082FF",
            fontFamily: "Space",
            marginBottom: "24px",
            padding: "8px 16px 8px 16px",
          }}
          className="btn-sm text-gray-200  hover:bg-gray-800 mx-auto"
        >
          <span>{texts["section-three"].span}</span>
        </div>
        <div
          style={{
            width: "fit-content",
            color: "#C082FF",
            fontFamily: "Space",
          }}
          className="btn-sm    mx-auto"
        >
          <span className="text-4xl font-bold" style={{ color: "#1BBC82" }}>
            {texts["section-three"].breadcrum3}
          </span>
          <span className="text-4xl font-bold" style={{ color: "#333333" }}>
            {texts["section-three"].breadcrum4}
          </span>
          <span className="text-4xl font-bold" style={{ color: "#1BBC82" }}>
            {texts["section-three"].breadcrum5}
          </span>
          <span className="text-4xl font-bold" style={{ color: "#333333" }}>
            {texts["section-three"].breadcrum6}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-20 mt-20 items-center">
          <div className="max-w-sm  mx-auto flex flex-col ">
            <div className="mx-auto">
              <img
                src="https://res.cloudinary.com/db60chvpz/image/upload/v1715223417/Landings/feature2/w98ny1gormp5x7wit8t5.png"
                alt="img1"
                width={100}
              />
            </div>
            <div
              className="mt-6 font-bold text-center text-[#1BBC82]"
              style={{ width: "128px" }}
            >
              <h2>Desarrollo de algoritmos de IA</h2>
            </div>
          </div>
          <div className="max-w-sm  mx-auto flex flex-col ">
            <div className="mx-auto">
              <img
                src="https://res.cloudinary.com/db60chvpz/image/upload/v1715223416/Landings/feature2/kraqnb0zfaf1wknsipbx.png"
                alt="img1"
                width={100}
              />
            </div>
            <div
              className="mt-6 font-bold text-center text-[#1BBC82]"
              style={{ width: "140px" }}
            >
              <h2>Software de automatización de procesos</h2>
            </div>
          </div>
          <div className="max-w-sm  mx-auto flex flex-col ">
            <div className="mx-auto">
              <img
                src="https://res.cloudinary.com/db60chvpz/image/upload/v1715223416/Landings/feature2/wyb7nhpit2z5lpmos8nr.png"
                alt="img1"
                width={100}
              />
            </div>
            <div
              className="mt-6 font-bold text-center text-[#1BBC82]"
              style={{ width: "128px" }}
            >
              <h2>Plataformas de análisis de datos</h2>
            </div>
          </div>
          <div className="max-w-sm  mx-auto flex flex-col ">
            <div className="mx-auto">
              <img
                src="https://res.cloudinary.com/db60chvpz/image/upload/v1715223416/Landings/feature2/bwkvllziftwq5y0in3di.png"
                alt="img1"
                width={100}
              />
            </div>
            <div
              className="mt-6 font-bold text-center text-[#1BBC82]"
              style={{ width: "128px" }}
            >
              <h2>Chatbots impulsados por IA</h2>
            </div>
          </div>
          <div className="max-w-sm  mx-auto flex flex-col ">
            <div className="mx-auto">
              <img
                src="https://res.cloudinary.com/db60chvpz/image/upload/v1715223416/Landings/feature2/idnio40hwtxa5j5sgnjz.png"
                alt="img1"
                width={100}
              />
            </div>
            <div
              className="mt-6 font-bold text-center text-[#1BBC82]"
              style={{ width: "128px" }}
            >
              <h2>Sistemas de mantenimiento predictivo</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Features;
