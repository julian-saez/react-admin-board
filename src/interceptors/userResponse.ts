import { AxiosResponse } from "axios";

export const userResponse = ( res: AxiosResponse ) => {
    const { name, image } = res.data;
    const result = {
        name,
        avatar: image,
    };
    return result;
};
