type CardHeaderProps = {
    title: string;
    subtitle?: string;
}

function CardHeader({title, subtitle}: CardHeaderProps) {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            padding: '16px',
            justifyContent: "space-between",
            alignItems: "flex-start",
        }}>
            <h3>
                {title}
            </h3>
            <h6>
                {subtitle}
            </h6>
        </div>
    );
}

export default CardHeader;