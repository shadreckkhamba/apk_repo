import Store from "./components/Store";
function App() {
    const StoreItems = ["Whatsapp","Facebook","Instagram"];
    return (
        <div>
            <Store items={StoreItems}/>
        </div>
    );
}
export default App;