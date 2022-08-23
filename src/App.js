import './App.css';
import * as htmlToImage from 'html-to-image';
import * as FileSaver from 'file-saver';
function App() {
  const numbers = [0, 25, 50, 75, 100]

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
        return <> <div id={`diagram_${num}`}>
          <div className="progress" >
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
