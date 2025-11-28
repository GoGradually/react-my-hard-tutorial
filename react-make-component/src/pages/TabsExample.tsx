import Tabs from "../components/Tabs.tsx";

function TabsExample(){
    const tabsItems = [
        { id: 'tab1', label: 'Tab 1', content: 'This is the content of Tab 1' },
        { id: 'tab2', label: 'Tab 2', content: 'This is the content of Tab 2' },
        { id: 'tab3', label: 'Tab 3', content: 'This is the content of Tab 3' },
    ];
    const defaultActiveId = 'tab1';

    return (
        <>
        <Tabs items={tabsItems} defaultActiveId={defaultActiveId}></Tabs>
        </>
    );
}
export default TabsExample;