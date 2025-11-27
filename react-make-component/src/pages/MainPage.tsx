import Stack from "../components/Stack.tsx";
import Card from "../components/Card.tsx";

function MainPage() {
    return <div>
        <Stack align={"center"} direction={"column"} justify={"space-between"} gap={12}>
            <Card title={"첫 번째 카드"} subtitle={"haha"}>
                이것은 첫 번째 카드의 설명입니다.
            </Card>
            <Card title={"두 번째 카드"}>
                이것은 두 번째 카드의 설명입니다.
            </Card>
            <Card title={"세 번째 카드"} subtitle={"hoho"}>
                이것은 세 번째 카드의 설명입니다.
            </Card>
        </Stack>
    </div>;
}

export default MainPage;