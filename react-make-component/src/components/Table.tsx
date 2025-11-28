type TableProps = {
    columns: { key: string; title: string }[];
    data: Record<string, string>[];
}

function Table(props: TableProps) {
    if (props.data.length === 0) {
        return <div>데이터 없음.</div>;
    }

    return (
        <table>
            <thead>
            <tr>
                {props.columns.map((col) => (<th key={col.key}>{col.title}</th>))}
            </tr>
            </thead>
            <tbody>
            {props.data.map((row, rowIndex) => (
                <tr key={rowIndex}>
                    {props.columns.map((col) => (
                        <td key={col.key}>{row[col.key]}</td>
                    ))}
                </tr>
            ))}
            </tbody>
        </table>
    );

}

export default Table;