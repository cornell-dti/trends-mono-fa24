import { useEffect, useState } from "react";
import "./App.css";

const MyComponent = () => {
    return <div>Hello World!</div>;
};

function App() {
    return (
        <div className="card">
            <MyComponent />
        </div>
    );
}

export default App;
