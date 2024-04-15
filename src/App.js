import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
function App() {
  const [questions, setQuestion] = useState(data);
  // const del = () => {
  //   setQuestion([]);
  // };
  return (
    <>
      <main>
        <div className='container'>
          <h3>questions and answers about logins</h3>
          <section className='info'>
            {questions.map((question) => {
              return <SingleQuestion key={question.id} question={question} />;
            })}
          </section>
        </div>
      </main>
    </>
  );
}

export default App;
