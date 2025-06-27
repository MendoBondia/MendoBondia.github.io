import "/src/css/TextBlock.css";

interface TextBlockProp {
  tamaño: number;
  contenido: React.ReactNode;
}
export default function TextBlock({ tamaño, contenido }: TextBlockProp) {
  const validateWidth = Math.max(Math.min(tamaño, 100), 20);
  return (
    <div style={{ width: `${validateWidth}%` }} className="textBlock">
      {contenido}
    </div>
  );
}
