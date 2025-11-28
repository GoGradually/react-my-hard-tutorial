import MainPage from "./pages/MainPage.tsx";
import {ToastProvider} from "./components/ToastProvider.tsx";

function App() {
    return (
        <ToastProvider>
            <MainPage/>
        </ToastProvider>
    );
}

export default App;
