import Button from "./Button.tsx";

function CardFooter() {
    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            padding: '16px',
            justifyContent: "space-around",
            alignItems: "center"
        }}>
            <Button variant={"primary"} description={"댓글"} size={"small"}/>
            <Button variant={"primary"} description={"공유"} size={"small"}/>
        </div>
    );
}
export default CardFooter;