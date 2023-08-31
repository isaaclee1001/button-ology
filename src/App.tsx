import { useEffect, useState } from "react";
import "./App.css";
import FormSection from "./components/FormSection";
import FieldSet from "./components/FieldSet";
import { useForm } from "react-hook-form";
function App() {
  const [count, setCount] = useState(0);
  const [pageState, setPageState] = useState("read");
  const [isPrimaryBtnPressed, setIsPrimaryBtnPressed] = useState(false);
  const sampleData = { assetId: "GAS-03-A-B302-N", assetName: "Gas meter" };

  const prefillData = {
    defaultValues: sampleData,
  };
  const { register, handleSubmit, resetField, reset } = useForm(prefillData);
  const handlePageState = (_state) => {
    setPageState(_state);
  };

  // useEffect(() => {}, [reset]);
  const handleAdd = () => {
    setPageState("add");
    reset({ assetId: "", assetName: "" });
    // resetField("assetId");
    // resetField("assetName");
  };
  // how to handle buttons
  //edit
  // save - change to edit mode, with pre-filled
  // cancel  - change to read mode
  // add
  //

  // primary buttons : read, edit, add
  // isPrimaryButtonPressed? secondaryButtonAppears

  // any of the buttons are pressed primary button is replaced by the secondary button
  return (
    <>
      <div className="flex justify-center space-x-2">
        {!isPrimaryBtnPressed && (
          <>
            <button
              onClick={() => {
                handlePageState("read");
                // setIsPrimaryBtnPressed(true);
              }}
              className="bg-slate-400 p-2 rounded text-white focus:ring-2 ring-pink-500 ring-inset focus:text-pink-500 focus:bg-pink-300"
            >
              {"read"}
            </button>
            <button
              onClick={() => {
                handlePageState("edit");
                setIsPrimaryBtnPressed(true);
              }}
              className="bg-slate-400 p-2 rounded text-white focus:ring-2 ring-pink-500 ring-inset focus:text-pink-500  focus:bg-pink-300"
            >
              {"edit"}
            </button>
            <button
              onClick={() => {
                handleAdd();
                setIsPrimaryBtnPressed(true);
              }}
              className="bg-slate-400 p-2 rounded text-white focus:ring-2 ring-pink-500 ring-inset focus:text-pink-500  focus:bg-pink-300"
            >
              {"add"}
            </button>
          </>
        )}
        {isPrimaryBtnPressed && (
          <>
            <button
              onClick={() => {
                console.log("secondary btn: save pressed");
                setIsPrimaryBtnPressed(false);
                setPageState("read");
              }}
              className="bg-slate-400 p-2 rounded text-white focus:ring-2 ring-pink-200 ring-inset focus:text-pink-500 focus:bg-pink-300"
            >
              {"save"}
            </button>
            <button
              onClick={() => {
                console.log("secondary btn: save pressed");
                setIsPrimaryBtnPressed(false);
                setPageState("read");
              }}
              className="bg-slate-400 p-2 rounded text-white focus:ring-2 ring-pink-200 ring-inset focus:text-pink-500 focus:bg-pink-300"
            >
              {"cacel"}
            </button>
          </>
        )}
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
            <form>
              <FieldSet
                label={"Asset ID"}
                input={register("assetId")}
                formMode={pageState}
              ></FieldSet>
              <FieldSet
                label={"Asset Name"}
                input={register("assetName")}
                formMode={pageState}
              ></FieldSet>
            </form>
          </>
        )}
        {pageState === "add" && (
          <>
            <form>
              <FieldSet
                label={"Asset ID"}
                input={register("assetId")}
                formMode={pageState}
              ></FieldSet>
              <FieldSet
                label={"Asset Name"}
                input={register("assetName")}
                formMode={pageState}
              ></FieldSet>
            </form>
          </>
        )}
      </FormSection>
    </>
  );
}

export default App;
