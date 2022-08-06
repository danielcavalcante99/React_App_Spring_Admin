import Card from "../components/Card";
import NavBar from "../components/NavBar";
import IconAppend from "../icons/IconAppend";
import IconBoxes from "../icons/IconBoxes";

const Home = () => {
  return (
    <>
      <NavBar />

      <div className="container">
        <h1 className="text-light-black mt-5">
          Saúde das APIs <IconBoxes />
        </h1>

        <div className="mb-2 text-end text-white">
          <IconAppend />
        </div>

        <div className="row">
          <div className="col">
            <Card app="Project 1" url="http://localhost:8080" statusApp="up" />
          </div>
        </div>

        <div className="row mt-3">
          <div className="col">
            <Card app="Project 2" url="http://localhost:8088" statusApp="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
