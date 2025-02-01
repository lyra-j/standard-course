import React from "react";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState();

  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");

  const handleSubmit = () => {};

  return (
    <>
      <main>
        <h1>todo list</h1>
        {/* 입력 폼 */}
        <form onSubmit={handleSubmit}>
          <label htmlFor="inputTitle">
            제목
            <input
              type="text"
              id="inputTitle"
              value={title}
              onChange={() => setTitle(e.target.value)}
              placeholder="할 일"
              required
            />
          </label>
          <label htmlFor="inputDetail">
            제목
            <input
              type="text"
              id="inputDetail"
              value={detail}
              onChange={() => setDetail(e.target.value)}
              placeholder="상세사항"
              required
            />
          </label>
          <button type="submit">+ add</button>
        </form>
        {/* 할일 목록 보드 */}
        <div>
          <div>
            <h2>Working..🔥</h2>
            <li>
              <div>
                <h3>todo Title</h3>
                <p>todo Detail</p>
              </div>
              <div>
                <button>- del</button>
                <button>v doneToggle</button>
              </div>
            </li>
          </div>

          <div>
            <h2>Done!! 🎉</h2>
            <li>
              <div>
                <h3>todo Title</h3>
                <p>todo Detail</p>
              </div>
              <div>
                <button>- del</button>
                <button>v doneToggle</button>
              </div>
            </li>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
