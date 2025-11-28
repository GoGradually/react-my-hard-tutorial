import Stack from "../components/Stack.tsx";
import Card from "../components/Card.tsx";
import NavBar from "../components/NavBar.tsx";
import TabsExample from "./TabsExample.tsx";
import List from "../components/List.tsx";
import Table from "../components/Table.tsx";

import { useState } from "react";
import Modal from "../components/Modal.tsx";
import Button from "../components/Button.tsx";
import ToastLoadButton from "../components/ToastLoadButton.tsx";

function MainPage() {
    const items = ["첫 번째 아이템", "두 번째 아이템", "세 번째 아이템", "네 번째 아이템", "다섯 번째 아이템"];

    const tableData = {
        columns: [
            { key: "한식", title: "한식" },
            { key: "중식", title: "중식" },
            { key: "일식", title: "일식" },
            { key: "양식", title: "양식" },
        ],
        data: [
            { 한식: "김치찌개", 중식: "짜장면", 일식: "초밥", 양식: "스테이크" },
            { 한식: "비빔밥", 중식: "탕수육", 일식: "라멘", 양식: "파스타" },
            { 한식: "불고기", 중식: "볶음밥", 일식: "우동", 양식: "피자" },
        ]
    }

    const [modalIsOpen, setModalIsOpen] = useState(false);

    return <>
        <NavBar></NavBar>
        <TabsExample></TabsExample>

        <Modal isOpen={modalIsOpen} onClose={() => setModalIsOpen(false)}>
            <h2>모달 창입니다!</h2>
            <p>안녕</p>
        </Modal>
        <div>
            <Button variant={"primary"} size={"large"} description={"모달 켜기"} onClick={() => setModalIsOpen(true)}></Button>
        </div>
        <List items={items} renderItem={(item) => item}></List>
        <Table columns={tableData.columns} data={tableData.data}></Table>
        <div>
            <ToastLoadButton></ToastLoadButton>
        </div>
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