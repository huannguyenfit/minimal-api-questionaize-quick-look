import API_PATH from '../constants/api-path';
import { getAsync, postAsync } from '../utils/http-client';
import { AxiosResponse } from 'axios';

class QuestionService {
    getAll = (skip:number, take: number): Promise<AxiosResponse<any[]>> => {
        return getAsync(`${API_PATH.GET_QUESTION}?skip=${skip}&take=${take}`, undefined);
    }

    add = (payload: any): Promise<AxiosResponse> => {
        return postAsync(API_PATH.ADD_QUESTION, payload);
    }
}

export default new QuestionService();
