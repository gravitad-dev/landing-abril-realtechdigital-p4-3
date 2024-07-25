import texts from "../../sections.json";

function MainFooter() {
  return (
    <footer className="items-center p-4 px-5 lg:px-20 text-black md:flex  md:justify-between text-center">
      <aside className="items-center">
        <div
          className="text-center"
          style={{
            backgroundColor: "none",
            border: "none",
          }}
        >
          <a href="/" className="flex items-center gap-6 ">
            <img src={texts["section-last"].logo} alt="logo" width={70} />
            <h1>{texts["section-one"].logoName}</h1>
          </a>
        </div>
      </aside>
    </footer>
  );
}
export default MainFooter;
