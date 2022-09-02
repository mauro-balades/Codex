

import { useAsync } from "react-async";
import File from "../file";
import { callFolder } from "../../utils";

export default ({path, level = 0}: any) => {
    const { data, error } = useAsync({promiseFn: callFolder, folder: path })
    // TODO: pending
    if (error) return <>{error.message}</>;
    if (data) return (
        <>
            {Array.from(data.entries()).map((entry) => {
                const [_, value]: any = entry;
                return (<File level={level} information={value} />);
            })}
        </>
    )
    return null
}
