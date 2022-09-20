import { IPatientDashboard } from '@core/models/patients/patientModel';
import { patientData } from 'modules/medical-examination/mocks';
import { BehaviorSubject } from 'rxjs';

class MedicationExaminationService {
  private patientSubject$ = new BehaviorSubject<IPatientDashboard>(patientData);

  getPatient() {
    return this.patientSubject$.value;
  }

  saveExamination(entity: IPatientDashboard) {
    this.patientSubject$.next(entity);
  }
}

export default new MedicationExaminationService();
