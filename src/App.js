import './App.css';
import * as saveSvg from 'save-svg-as-png';
import * as htmlToImage from 'html-to-image';
import * as FileSaver from 'file-saver';
import React, { useEffect, useState } from 'react';

function App() {
  const imageOptions = {
    scale: 5,
    encoderOptions: 1,
    backgroundColor: 'white',
  }
  const numbers = [25, 50, 75, 100]

  const download = () => {
    // saveSvg.saveSvgAsPng(document.getElementById("dg"), "diagram.png", imageOptions);
    var node = document.getElementById('diagram');
    htmlToImage.toBlob(document.getElementById('diagram'))
      .then(function (blob) {
        if (window.saveAs) {
          console.log('hello', document.getElementById("dg"))
          window.saveAs(blob, 'my-node.png');
        }
        else {
          FileSaver.saveAs(blob, 'my-node.png');
        }
      });
  }

  const downloadElement = async () => {
    console.log('hello');
      numbers.forEach(num => {
        var node = document.getElementById(`diagram_${num}`);
        console.log(num, node)
        htmlToImage.toBlob(node)
          .then(function (blob) {
            if (window.saveAs) {
              console.log('hello', document.getElementById(`diagram_${num}`))
              window.saveAs(blob, 'my-node.png');
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
      <h1>Progress Bar with SVG Mask</h1>

      {/* <div className="progress" >
        <svg xmlns="http://www.w3.org/2000/svg" id="dg">
          <defs>
            <mask id="mask">
              <rect width="100%" height="100%" x="-80%" y="0" fill="#fff" />
            </mask>
          </defs>

          <rect className="bg" width="100%" height="100%" rx="4" fill="grey" />

          <text className="unfilled-text" text-anchor="middle" x="50%" y="50%" dy=".3em">50%</text>

          <g mask="url(#mask)">
            <rect className="fill" width="100%" height="100%" rx="4" fill="red" />

            <text className="filled-text" text-anchor="middle" x="50%" y="50%" dy=".3em">50%</text>
          </g>
        </svg>
      </div> */}
      <br />
      <br />
      {/* {status && downloadElement()}; */}
      {/* {numbers.forEach(num => { }} */}
      {numbers && numbers.map(num => {
        return <> <div id={`diagram_${num}`}>
          <div className="progress" >
            <div className="progress-bar" role="progressbar" style={{ width: `${num}%` }} aria-valuenow={num} aria-valuemin="0" aria-valuemax="100"></div>
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
