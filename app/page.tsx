"use client";
export default function Home() {
  function addNumbers() {
    const num1 = document.getElementById("num1") as HTMLInputElement;
    const num2 = document.getElementById("num2") as HTMLInputElement;
    const result = document.getElementById("result") as HTMLInputElement;
    result.value = (parseFloat(num1.value) + parseFloat(num2.value)).toString();
  }

  function subNumbers() {
    const num1 = document.getElementById("num3") as HTMLInputElement;
    const num2 = document.getElementById("num4") as HTMLInputElement;
    const result = document.getElementById("result2") as HTMLInputElement;
    result.value = (parseFloat(num1.value) - parseFloat(num2.value)).toString();
  }
  return (
    <div className="mx-auto">
      <div className="card-body max-w-lg mx-auto bg-base-200 shadow-lg rounded-lg">
        <h2 className="font-semibold text-2xl text-center">Addition</h2>
        <fieldset className="fieldset">
          <div className="flex items-center gap-2">
            <input
              type="number"
              className="input"
              id="num1"
              placeholder="Number 1"
            />
            <input
              type="number"
              className="input"
              id="num2"
              placeholder="Number 2"
            />
            <input
              type="number"
              className="input"
              id="result"
              placeholder="Result"
            />
          </div>
          <button
            className="btn btn-neutral mt-2"
            type="button"
            onClick={addNumbers}
          >
            Add
          </button>
        </fieldset>
      </div>

      <div className="card-body max-w-lg mx-auto bg-base-200 shadow-lg rounded-lg">
        <h2 className="font-semibold text-2xl text-center">Addition</h2>
        <fieldset className="fieldset">
          <div className="flex items-center gap-2">
            <input
              type="number"
              className="input"
              id="num3"
              placeholder="Number 1"
            />
            <input
              type="number"
              className="input"
              id="num4"
              placeholder="Number 2"
            />
            <input
              type="number"
              className="input"
              id="result2"
              placeholder="Result"
            />
          </div>
          <button
            className="btn btn-neutral mt-2"
            type="button"
            onClick={subNumbers}
          >
            Subtract
          </button>
        </fieldset>
      </div>
    </div>
  );
}
