import Store from "./components/Store";
function App() {
    const StoreItems = [
        {
        title: " Whatsapp",
        size: " 49mb",
    },
    {
        title: " Instagram",
        size: "70mb",
    },
    {
        title: " Facebook",
        size: " 40mb",
    },
    {
        title: " Twitter",
        size: " 45mb",
    },
  ];
    return (
        <div>
            <Store items={StoreItems}/>
        </div>
    );
}
export default App;