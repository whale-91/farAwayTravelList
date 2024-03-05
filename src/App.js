import { useState } from "react";
import "./index.css";
import Logo from "./logo";
import Form from "./form";
import { PackingList } from "./PackingList.1";
import { Stats } from "./Stats";

// export default function App() {
//   return (
//     <div className="App">

//     </div>
//   );
// }

// const questions = [
//   {
//     id: 3457,
//     question: "What language is React based on?",
//     answer: "JavaScript",
//   },
//   {
//     id: 7336,
//     question: "What are the building blocks of React apps?",
//     answer: "Components",
//   },
//   {
//     id: 8832,
//     question: "What's the name of the syntax we use to describe a UI in React?",
//     answer: "JSX",
//   },
//   {
//     id: 1297,
//     question: "How to pass data from parent to child components?",
//     answer: "Props",
//   },
//   {
//     id: 9103,
//     question: "How to give components memory?",
//     answer: "useState hook",
//   },
//   {
//     id: 2002,
//     question:
//       "What do we call an input element that is completely synchronised with state?",
//     answer: "Controlled element",
//   },
// ];

// function Counter() {
//   const [count, SeCount] = useState(0);
//   const [step, setStep] = useState(1);
//   const date = new Date();
//   date.setDate(date.getDate() + count);
//   console.log(date);
//   function nextStep() {
//     setStep((s) => s + 1);
//   }
//   function prevStep() {
//     setStep((s) => s - 1);
//   }
//   function nextCount() {
//     SeCount((c) => c + step);
//   }
//   function nextPrev() {
//     SeCount((c) => c - step);
//   }
//   function handleReset() {
//     setStep(1);
//     SeCount(0);
//   }
//   // function slider(){console.log();}
//   return (
//     <div>
//       <div>
//         <input
//           value={step}
//           onChange={(e) => setStep(Number(e.target.value))}
//           type="range"
//         ></input>
//         <button onClick={prevStep}>-</button>
//         <span>{step}</span>
//         <button onClick={nextStep}>+</button>
//       </div>

//       <div>
//         <input
//           value={count}
//           onChange={(e) => SeCount(Number(e.target.value))}
//         ></input>

//         <button onClick={nextPrev}>-</button>
//         <span>{Math.abs(count)}</span>
//         <button onClick={nextCount}>+</button>
//       </div>

//       <p>
//         <span></span>
//         <span>{date.toDateString()}</span>
//       </p>
//       {count === 0 && step === 1 ? (
//         ""
//       ) : (
//         <button onClick={handleReset}>reset</button>
//       )}
//     </div>
//   );
// }

// function FlashCards() {
//   const [selectedId, setSelectedId] = useState(null);
//   function handleClick(e) {
//     // setSelectedId(e);
//     console.log(e);
//     setSelectedId(e);
//   }
//   return (
//     <div className="flashcards">
//       {questions.map((question) => (
//         <div
//           key={question.id}
//           className={question.id === selectedId ? "selected" : ""}
//           onClick={() => handleClick(question.id)}
//         >
//           <p>
//             {question.id === selectedId ? question.answer : question.question}
//           </p>
//         </div>
//       ))}
//     </div>
//   );
// }

// function Card({ desc }) {
//   console.log(desc);
//   function active()
//   return (
//     <div onClick={() => }>
//       <h1>{desc.question}</h1>
//     </div>
//   );
// }

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
//   { id: 3, description: "charger", quantity: 1, packed: true },
// ];

export default function App() {
  const [items, seItems] = useState([]);
  function handleDeleteItem(id) {
    seItems((items) => items.filter((item) => item.id !== id));
  }
  function clearList() {
    const confirmed = window.confirm(
      "you sure you wanna delete all them items?"
    );
    if (confirmed) seItems([]);
  }
  function handleAdditems(e) {
    seItems((i) => [...i, e]);
  }
  function handleToggleitem(id) {
    seItems((i) =>
      i.map((e) => (e.id === id ? { ...e, packed: !e.packed } : e))
    );
    // console.log(items);
  }
  return (
    <div className="app">
      <Logo></Logo>

      <Form onAdditems={handleAdditems}></Form>
      <PackingList
        items={items}
        onClearList={clearList}
        onDeleteItem={handleDeleteItem}
        onToggleitem={handleToggleitem}
      />
      <Stats items={items} />
    </div>
  );
}
