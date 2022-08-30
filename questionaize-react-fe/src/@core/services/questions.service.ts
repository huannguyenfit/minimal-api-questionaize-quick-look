import API_PATH from '../constants/api-path';
import { getAsync, postAsync, putAsync } from '../utils/http-client';
import { Observable } from 'rxjs';
import moment, { Moment } from 'moment';
import { AxiosResponse } from 'axios';

class QuestionService {
    getAll = (skip:number, take: number): Observable<AxiosResponse<any[]>> => {
        return getAsync(`${API_PATH.GET_QUESTION}?skip=${skip}&take=${take}`, undefined);
    }

    add = (payload: any): Observable<AxiosResponse> => {
        return postAsync(API_PATH.ADD_QUESTION, payload);
    }


}

export default new QuestionService();
