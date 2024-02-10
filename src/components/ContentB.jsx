import {Button} from "./SharedComponents";

const ContentB = (props) => {
    return <div style={{display: "grid", gridTemplateColumns: "1fr 1fr"}}>
        <p>Button from content B</p>
        <Button label={"Button B"}/>
    </div>;
}

export default ContentB;