
const Tile = ({ value, onClick, white }) => (
  <div
    onClick={onClick}
    className="flex items-center justify-center bg-green-600 h-20 w-20 border-solid border-2 border-green-800"
  >
    {value !== 0 && (
      <div
        className={`${value === white ? "bg-white" : "bg-black"
          } h-16 w-16 rounded-full `}
      />
    )}
  </div>
);

export default Tile