import shake from "../shake.jfif";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <nav className="flex gap-6 items-center text-white p-4 bg-indigo-800">
      <img src={shake} className="w-16 rounded-xl" alt="logo" />

      <h1 className="text-xl font-semibold">Shake S Peare</h1>

      <ul className="list-none flex gap-3">
        <li><a href="/Home">Home</a></li>
        <li><a href="/Create">+Produtos</a></li>
        <li><a href="/Contato">Contato</a></li>
      </ul>
    </nav>
  );
};
