import React, { useState } from 'react';

function Todo({ todoa }) {
  return (
    <div> {todoa.text}</div>
  )
}
function Hooks() {
  const [todos] = useState([ 
    {
      text: 'Hi im Raja',
    },
    {
      text: 'This page is about React hooks',
    },
    {
      text: 'Developer Facebook',
    }
  ]);

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo key={index} value={index} todoa={todo} />
        )    )}
      </div>
    </div>
  )
}
export default Hooks;