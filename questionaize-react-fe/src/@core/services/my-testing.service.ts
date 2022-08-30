import API_PATH from '../constants/api-path';
import { getAsync, postAsync, putAsync } from '../utils/http-client';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';

class MyTestingService {
    getAll = (skip:number, take: number): Observable<AxiosResponse<any[]>> => {
        return getAsync(`${API_PATH.GET_MY_ASSESSMENT}?skip=${skip}&take=${take}`, undefined);
    }

    saveAssessment = (employeeAssessmentId: number, payload: any): Observable<AxiosResponse> => {
        return postAsync(`${API_PATH.SAVE_ASSESSMENT}?employeeAssessmentId=${employeeAssessmentId}`, payload);
    }
    
    readyToTest = (assessmentId: number): Observable<AxiosResponse> => {
        return postAsync(`${API_PATH.READY_TO_START_ASSESSMENT}?assessmentId=${assessmentId}`);
    }

    getTest = (assessmentId: number): Observable<AxiosResponse> => {
        return getAsync(`${API_PATH.GET_AN_ASSESSMENT}?assessmentId=${assessmentId}`);
    }
}


export default new MyTestingService();
