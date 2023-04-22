export default function Button({ title, onClick, colored }) {
  return (
    <button
      className={`inline-block py-2 px-6 text-sm font-bold rounded-l-xl rounded-t-xl transition duration-200 ${
        colored ? "bg-primary text-white" : "bg-gray-300 text-black"
      }`}
      onClick={onClick}
    >
      {title}
    </button>
  );
}
