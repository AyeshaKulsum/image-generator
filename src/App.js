import './App.css';
import * as htmlToImage from 'html-to-image';
import * as FileSaver from 'file-saver';
function App() {
  const numbers = [
    // 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
    // 10, 11, 12, 13, 14, 15, 16, 17, 18, 19
    //  20, 21, 22, 23, 24, 25, 26, 27, 28, 29
    //  30, 31, 32, 33, 34, 35, 36, 37, 38, 39
    //  40, 41, 42, 43, 44, 45, 46, 47, 48, 49
    //  50, 51, 52, 53, 54, 55, 56, 57, 58, 59
    // 60, 61, 62, 63, 64, 65, 66, 67, 68, 69
    //  70, 71, 72, 73, 74, 75, 76, 77, 78, 79
    //  80, 81, 82, 83, 84, 85, 86, 87, 88, 89
    //  90, 91, 92, 93, 94, 95, 96, 97, 98, 99
     100
  ]

  const downloadElement = async () => {
    console.log('hello');
    numbers.forEach(num => {
      var node = document.getElementById(`diagram_${num}`);
      console.log(num, node)
      htmlToImage.toBlob(node)
        .then(function (blob) {
          if (window.saveAs) {
            console.log('hello', document.getElementById(`diagram_${num}`))
            window.saveAs(blob, `bar_${num}.png`);
          }
          else {
            console.log('hello', document.getElementById(`diagram_${num}`))
            FileSaver.saveAs(blob, "image.jpg");
          }
        }).catch((error) => console.log(error));
    });
  }

  return (
    <div className="App">
      <h1>Progress Bar</h1>
      <br />
      <br />
      {numbers && numbers.map(num => {
        return <> <div id={`diagram_${num}`} style={{ "background-color": '#E7E9ED;', width: "240px", height: "20px" }}>
          <div className="progress" style={{ "border-radius": "0" }}  >
            <div className="progress-bar" role="progressbar" style={{ width: `${num}%`, "background-color": '#57599F' }} aria-valuenow={num} aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>
          <br />
          <br />
        </>
      })}
      <br />
      <br />
      <div>
        <button
          type="submit"
          onClick={() => { downloadElement() }}

        >
          Download
        </button></div>
    </div >
  );
}

export default App;
