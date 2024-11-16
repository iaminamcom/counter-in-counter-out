import { Minus, Plus, Trash } from "lucide-react";
import { Button } from "./ui/button";

interface CountBtnProps {
    name: string;
    id: number;
    count: number;
    color: string;
    onCountChange: (id: number, newCount: number) => void;
    onDelete: (id: number) => void;
}

const CountBtn: React.FC<CountBtnProps> = ({ name, id, count, color, onCountChange, onDelete }) => {
    const handleIncrement = () => onCountChange(id, count + 1);
    const handleDecrement = () => onCountChange(id, count - 1);

    return (
        <div className={`text-center flex flex-col items-center gap-4 p-8 border rounded-lg w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1rem)] xl:w-[calc(25%-1rem)] 2xl:w-[calc(20%-1rem)] relative group/counter`} style={{ borderColor: color, backgroundColor: `${color}20` }}>
            <div className="flex items-center gap-4">
                <Button size='icon' aria-label="subtract" onClick={handleDecrement} disabled={count <= 0}>
                    <Minus />
                </Button>
                <div className="text-6xl leading-none font-mono">{count}</div>
                <Button size='icon' aria-label="add" onClick={handleIncrement}>
                    <Plus />
                </Button>
            </div>

            <div className="text-2xl">{name}</div>

            <Button onClick={() => onDelete(id)} size="icon" variant='destructive' className="absolute top-4 right-4 opacity-0 group-hover/counter:opacity-100 transition">
                <Trash/>
            </Button>
        </div>
    );
};

export default CountBtn;
