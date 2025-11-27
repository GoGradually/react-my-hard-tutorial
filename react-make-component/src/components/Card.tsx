import CardHeader from "./CardHeader.tsx";
import CardFooter from "./CardFooter.tsx";
import CardBody from "./CardBody.tsx";
import React from "react";

type CardProps = {
    title: string;
    subtitle?: string;
    children: React.ReactNode;
}

function Card({title, subtitle, children}: CardProps) {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            border: '1px solid #ccc',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            overflow: 'hidden',
            width: '300px',
            margin: '16px',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <CardHeader title={title} subtitle={subtitle} />
            <CardBody>{children}</CardBody>
            <CardFooter></CardFooter>
        </div>
    );
}

export default Card;