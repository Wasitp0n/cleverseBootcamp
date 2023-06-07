import "./App.css";
import Nav from "./component/Nav";
import Footer from "./component/Footer";
import Card from "./component/Card";
import data from "./Data";
import Strip from "./component/Strip";
import Podcard from "./component/Podcard";

function App() {
  return (
    <div className="App">
      <Nav />
      <Strip con1={"Blog"} con2={"view all"} />
      <div>
        <Card
          author={data[0].author}
          date={data[0].date}
          header={data[0].header}
          description={data[0].description}
          readingTime={data[0].readingTime}
          author2={data[1].author}
          date2={data[1].date}
          header2={data[1].header}
          description2={data[1].description}
          readinfTime2={data[1].readingTime}
        />

        <Card
          author={data[2].author}
          date={data[2].date}
          header={data[2].header}
          description={data[2].description}
          readinfTime={data[2].readingTime}
          author2={data[3].author}
          date2={data[3].date}
          header2={data[3].header}
          description2={data[3].description}
          readinfTime2={data[3].readingTime}
        />

        <Strip con1={"Post & Video"} con2={"view all"} />
        <Podcard
          author={data[0].author}
          date={data[0].date}
          header={data[0].header}
          description={data[0].description}
          readingTime={data[0].readingTime}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
