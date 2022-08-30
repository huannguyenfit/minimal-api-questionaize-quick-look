import API_PATH from '../constants/api-path';
import { getAsync, postAsync } from './../utils/http-client';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';

class AssessmentService {
    getAll = (skip:number, take: number): Observable<AxiosResponse<any[]>> => {
        return getAsync(`${API_PATH.GET_ASSESSMENT}?skip=${skip}&take=${take}`, undefined);
    }

    add = (payload: any): Observable<AxiosResponse> => {
        return postAsync(API_PATH.ADD_ASSESSMENT_MANUAL, payload);
    }
    
    addAuto = (numberOfQuestion: number, payload: any): Observable<AxiosResponse> => {
        return postAsync(`${API_PATH.ADD_ASSESSMENT_AUTO}/${numberOfQuestion}`, payload);
    }
}

export default new AssessmentService();
