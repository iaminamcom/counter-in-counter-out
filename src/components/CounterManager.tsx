import { useState, useEffect } from 'react';
import CountBtn from './CountBtn';
import { Input } from './ui/input';
import { Button } from './ui/button';

function randomColor() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

type Counter = {
    id: number;
    name: string;
    count: number;
    color: string;
}


const CounterManager = () => {
    const [counters, setCounters] = useState<Counter[]>([]);
    const [newCounterName, setNewCounterName] = useState('');

    useEffect(() => {
        const savedCountersStr = localStorage.getItem('counters');
        if (savedCountersStr !== null) {
            const savedCounters: Counter[] = JSON.parse(savedCountersStr) || [];
            setCounters(savedCounters);
        }
    }, []);

    useEffect(() => {
        if (counters.length > 0) localStorage.setItem('counters', JSON.stringify(counters));
    }, [counters]);

    const handleAddCounter = () => {
        if (!newCounterName) return;
        const newCounter = { id: Date.now(), count: 0, color: randomColor(), name: newCounterName };
        setCounters([...counters, newCounter]);
        setNewCounterName('');
    };

    const handleCountChange = (id: number, newCount: number) => {
        const updatedCounters = counters.map(counter =>
            counter.id === id ? { ...counter, count: newCount } : counter
        );
        setCounters(updatedCounters);
    };

    const handleDeleteCounter = (id: number) => {
        const updatedCounters = counters.filter(counter => counter.id !== id);
        setCounters(updatedCounters);
    };

    return (
        <div className="space-y-8">
            <div className="flex w-full max-w-sm md:items-center flex-col gap-2 md:flex-row mx-auto">
                <Input placeholder="Name your counter" onChange={(e) => setNewCounterName(e.target.value)} value={newCounterName} />
                <Button className='bg-orange-500 text-white' onClick={handleAddCounter} disabled={!newCounterName} >Add new counter</Button>
            </div>

            <div className="flex flex-wrap gap-4">
                {counters?.map((counter) => (
                    <CountBtn
                        name={counter.name}
                        key={counter.id}
                        id={counter.id}
                        count={counter.count}
                        color={counter.color}
                        onCountChange={handleCountChange}
                        onDelete={handleDeleteCounter}
                    />
                ))}
            </div>
        </div>
    );
};

export default CounterManager;
