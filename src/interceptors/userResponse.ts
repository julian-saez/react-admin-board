import { AxiosResponse } from "axios";

export const userResponse = ( res: AxiosResponse ) => {
    const { name } = res.data;
    const result = {
        name
    };
    return result;
};
