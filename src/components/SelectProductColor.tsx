type SelectProductColorProps = {
  colors: string[];
  productColor: string;
  setProductColor: React.Dispatch<React.SetStateAction<string>>;
};

function SelectProductColor({
  colors,
  productColor,
  setProductColor,
}: SelectProductColorProps) {
  return (
    <div className="mt-6">
      <h4 className="text-base font-medium tracking-wider capitalize">
        colors
      </h4>
      <div className="mt-2">
        {colors.map((color) => (
          <button
            key={color}
            type="button"
            className={`mr-2 h-6 w-6 rounded-full border-2 ${color === productColor && "border-primary"}`}
            style={{ backgroundColor: color }}
            onClick={() => setProductColor(color)}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default SelectProductColor;
