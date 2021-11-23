import "./App.css";
import { CopyToClipboard } from "react-copy-to-clipboard";
import toast, { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="container">
      <CopyToClipboard className="copy" text="https://www.faztweb.com/">
        <p
          onClick={() =>
            toast.success("Texto Copiado feliciadades!!", {
              style: {
                borderRadius: "10px",
                background: "#333",
                color: "#ffff",
              },
            })
          }
          style={{ textAlign: "center" }}
        >
          Copy me!!!!
        </p>
      </CopyToClipboard>
      <Toaster position="bottom-right" reverseOrder={false} />
    </div>
  );
}

export default App;
