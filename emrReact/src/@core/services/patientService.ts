import { patientRegistrationInfo } from "modules/patient-registration/mock";
import { BehaviorSubject } from "rxjs";

class PatientService {
    private patientSubject$ = new BehaviorSubject(patientRegistrationInfo);

    getPatientInfo() {
        return this.patientSubject$.value;
    }
}
export default new PatientService();