import React from "react";
import "./images.css";
import Names from "./names.json";

function App() {
  // console.log(Names.photos);
  return (
    <>
      <h1
        style={{
          textAlign: "center",
          color: "red",
        }}
      >
        Christmas Day Pictures
      </h1>
      <h2 style={{ textAlign: "center" }}>Website By Aditya</h2>
      <div style={{display:"flex",justifyContent:"center"}}>
      <img src="https://www.werchristmas.co.uk/cdn/shop/products/1_ecc72ed9-681c-4b79-b024-dbb52d71ba3c.jpg?v=1665053264&width=900" style={{width:"10%",border:"10px solid black"}}/>
      </div>
      <div class="divider"></div>
      <div class="image-grid">
        {Names.photos.map((item, index) => {
          console.log(index);
          return (
            <div style={{ display: "flex", flexDirection: "column" }}>
              <img
                src={`/pics/${item}`}
                alt={`image ${index}`}
                style={{ paddingBottom: "10px" }}
              />
              <button
                style={{
                  background: "black",
                  padding: "4px",
                  fontSize: "large",
                }}
              >
                <a
                  href={`/pics/${item}`}
                  download={`Christmas-${index}.jpg`}
                  style={{ color: "red", textDecoration: "none" }}
                >
                  Download
                </a>
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
