import { useLocalStorage } from '@core/hooks/useLocalStorage';
import { TDModuleEnum } from '@core/models/enums/moduleEnums';
import { BehaviorSubject } from 'rxjs';
import localStorageService from './localStorageService';
// handle

export const MODULE_KEY = 'MODULE_KEY';
class ModuleService {
  private moduleSubject$ = new BehaviorSubject<number>(localStorageService.get(MODULE_KEY) || TDModuleEnum.MedicalExamination);
  //   private moduleObservable$ = this.moduleSubject$.asObservable();
  setModule(moduleId) {
    this.moduleSubject$.next(moduleId);
    localStorageService.set(MODULE_KEY, moduleId);
  }
  getModuleId = () => this.moduleSubject$.value;
  moduleChanged$() {
    return this.moduleSubject$;
  }
}

export default new ModuleService();
