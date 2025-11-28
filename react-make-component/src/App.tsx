import {ToastProvider} from "./components/ToastProvider.tsx";
import SignUpPage from "./pages/SignUpPage.tsx";

function App() {
    return (
        <ToastProvider>
            <SignUpPage/>
        </ToastProvider>
    );
}

export default App;
