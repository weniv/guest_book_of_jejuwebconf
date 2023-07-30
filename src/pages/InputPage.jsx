import { useState } from "react";
import { MobileInput, MobileComplete } from "../components";

export default function InputPage() {
    const [isComplete, setIsComplete] = useState(false);

    return <>{!isComplete ? <MobileInput setIsComplete={setIsComplete} /> : <MobileComplete setIsComplete={setIsComplete} />}</>;
}
