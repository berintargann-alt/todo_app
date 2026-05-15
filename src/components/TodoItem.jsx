function TodoItem(props) {
  const { item, gorevler, setGorevler } = props;

  const sil = () => {
    const filtrelenmis = gorevler.filter(
      (g) => g.id !== item.id
    );

    setGorevler(filtrelenmis);
  };

  const duzenle = () => {
    const yeniText = prompt("Yeni görev:", item.text);

    if (yeniText) {
      const guncelListe = gorevler.map((g) =>
        g.id === item.id
          ? { ...g, text: yeniText }
          : g
      );

      setGorevler(guncelListe);
    }
  };

  return (
    <div className="bg-gray-100 p-4 rounded-xl flex justify-between items-center">
      <span>{item.text}</span>

      <div className="flex gap-2">
        <button
          onClick={duzenle}
          className="bg-yellow-400 px-3 py-1 rounded-lg"
        >
          Düzenle
        </button>

        <button
          onClick={sil}
          className="bg-red-500 text-white px-3 py-1 rounded-lg"
        >
          Sil
        </button>
      </div>
    </div>
  );
}

export default TodoItem;