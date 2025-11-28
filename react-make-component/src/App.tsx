import {ToastProvider} from "./components/ToastProvider.tsx";
import LoginPage from "./pages/LoginPage.tsx";

function App() {
    return (
        <ToastProvider>
            <LoginPage/>
        </ToastProvider>
    );
}

export default App;
