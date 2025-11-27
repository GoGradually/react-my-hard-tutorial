import React from "react";

type Props = {
    children?: React.ReactNode;
}

function CardBody({children}:Props)  {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            padding: '16px',
            justifyContent: "space-around",
            alignItems: "center"
        }}>
            {children}
        </div>
    );
}
export default CardBody;