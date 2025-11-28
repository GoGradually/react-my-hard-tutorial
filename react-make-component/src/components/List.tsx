
type ListProps<T> = {
    items: T[];
    renderItem: (item: T) => React.ReactNode;
}

function List<T>({items, renderItem}: ListProps<T>) {
    if (items.length === 0) {
        return <div>데이터 없음.</div>;
    }

    return (
        <ul>
            {items.map((item, index) => (
            <li key={index}>{renderItem(item)}</li>))}
        </ul>
    );
}

export default List;