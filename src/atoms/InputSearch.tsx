import LensIcon from "./icons/LensIcon";

interface Props {
    placeholder: string;
}

const InputSearch = ( { placeholder }: Props ) => {
    return (
        <div id="input_search_bg">
            <div id="lens_icon">
                <LensIcon fill="#9A9AB0" />
            </div>
            <input id="input_search" placeholder={ placeholder } />
        </div>
    )
}

export default InputSearch;
