import React, {useState} from 'react';

type TabItem = {
    id: string;
    label: string;
    content: React.ReactNode;
}
type TabsProps = {
    items: TabItem[];
    defaultActiveId?: string;
}

function Tabs(props: TabsProps) {
    const [activeId, setActiveId] = useState(props.defaultActiveId);

    return (
        <div>
            <div>
                {props.items.map((item) => (<button onClick={() => setActiveId(item.id)}>{item.label}</button>))}
            </div>
            <div>
                {props.items.map((item) => (
                    <div style={{display: item.id === activeId ? 'block' : 'none'}}>
                        {item.content}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Tabs;