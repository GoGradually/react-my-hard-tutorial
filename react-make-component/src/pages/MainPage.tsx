import Stack from "../components/Stack.tsx";
import Card from "../components/Card.tsx";
import NavBar from "../components/NavBar.tsx";
import TabsExample from "./TabsExample.tsx";
import List from "../components/List.tsx";

function MainPage() {
    const items = ["첫 번째 아이템", "두 번째 아이템", "세 번째 아이템", "네 번째 아이템", "다섯 번째 아이템"];
    return <>
        <NavBar></NavBar>
        <TabsExample></TabsExample>
        <List items={items} renderItem={(item) => item}></List>
        <div>
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
                <Card title={"네 번째 카드"}>
                    이것은 네 번째 카드의 설명입니다.
                </Card>
                <Card title={"다섯 번째 카드"} subtitle={"huhu"}>
                    이것은 다섯 번째 카드의 설명입니다.
                </Card>
            </Stack>
        </div>
    </>;
}

export default MainPage;