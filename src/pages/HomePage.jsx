import { useState } from "react";
import TodoItem from "../components/TodoItem";

function HomePage() {
  const [gorev, setGorev] = useState("");
  const [gorevler, setGorevler] = useState([]);

  const gorevEkle = () => {
    if (gorev.trim() === "") return;

    const yeniGorev = {
      id: Date.now(),
      text: gorev,
    };

    setGorevler([...gorevler, yeniGorev]);
    setGorev("");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-4xl font-bold text-center mb-10">
        Todo App
      </h1>

      <div className="max-w-xl mx-auto bg-white p-6 rounded-2xl shadow-lg">
        <div className="flex gap-3 mb-6">
          <input
            type="text"
            placeholder="Görev yaz..."
            value={gorev}
            onChange={(e) => setGorev(e.target.value)}
            className="flex-1 border p-3 rounded-xl"
          />

          <button
            onClick={gorevEkle}
            className="bg-blue-500 text-white px-5 rounded-xl"
          >
            Ekle
          </button>
        </div>

        <div className="space-y-3">
          {gorevler.map((item) => (
            <TodoItem
              key={item.id}
              item={item}
              gorevler={gorevler}
              setGorevler={setGorevler}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;