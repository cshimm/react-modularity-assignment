import {Button} from "./SharedComponents";

const ContentA = (props) => {
    return <div style={{display: "grid", gridTemplateColumns: "1fr 1fr"}}>
        <p>Button from content A</p>
        <Button label={"Button A"}/>
    </div>
}

export default ContentA;