import CounterManager from "./components/CounterManager";

function App() {
  return (
    <main className="container py-8 space-y-8">
      <div className="space-y-2 text-center">
        <h1 className="text-4xl font-bold font-greatVibes">Counters and many counters</h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          I made it for personal needs because I was in need of counting multiple things together.
        </p>
      </div>
      <CounterManager />
    </main>
  );
}

export default App;
