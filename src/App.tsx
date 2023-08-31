import { useState } from "react";
import "./App.css";
import FormSection from "./components/FormSection";
import FieldSet from "./components/FieldSet";

function App() {
  const [count, setCount] = useState(0);
  const [pageState, setPageState] = useState("read");

  const sampleData = { assetId: "GAS-03-A-B302-N", assetName: "Gas meter" };

  const handlePageState = (_state) => {
    setPageState(_state);
  };

  // how to handle buttons
  //edit
  // save - change to edit mode, with pre-filled
  // cancel  - change to read mode
  // add
  //
  return (
    <>
      <div className="flex justify-center space-x-2">
        <button
          onClick={() => {
            handlePageState("print");
          }}
          className="bg-slate-400 p-2 rounded text-white focus:ring-2 ring-pink-500 ring-inset focus:text-pink-500 focus:bg-pink-300"
        >
          {"print"}
        </button>
        <button
          onClick={() => {
            handlePageState("edit");
          }}
          className="bg-slate-400 p-2 rounded text-white focus:ring-2 ring-pink-500 ring-inset focus:text-pink-500  focus:bg-pink-300"
        >
          {"edit"}
        </button>
        <button
          onClick={() => {
            handlePageState("add");
          }}
          className="bg-slate-400 p-2 rounded text-white focus:ring-2 ring-pink-500 ring-inset focus:text-pink-500  focus:bg-pink-300"
        >
          {"add"}
        </button>
      </div>

      <section className="m-2 bg-slate-200">
        <p>
          {"Current page state is :"}
          <span className="text-pink-500 block">{pageState}</span>
        </p>
      </section>
      <FormSection title="Playground">
        {pageState === "read" && (
          <>
            <FieldSet label={"Asset ID"} value={sampleData.assetId}></FieldSet>
            <FieldSet
              label={"Asset Name"}
              value={sampleData.assetName}
            ></FieldSet>
          </>
        )}
        {pageState === "edit" && (
          <>
            <FieldSet label={"Asset ID"} value={sampleData.assetId}></FieldSet>
            <FieldSet
              label={"Asset Name"}
              value={sampleData.assetName}
            ></FieldSet>
          </>
        )}
      </FormSection>
    </>
  );
}

export default App;
