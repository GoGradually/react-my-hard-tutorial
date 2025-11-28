import Button from "./Button.tsx";
import {useToast} from "./ToastProvider.tsx";

function ToastLoadButton() {
    const {showToast}  = useToast();
    return (
        <Button description={"토스트 띄우기"} variant={"secondary"} size={"medium"} onClick={() => showToast("이것은 토스트 메시지입니다!")}>
        </Button>
    )
}
export default ToastLoadButton;