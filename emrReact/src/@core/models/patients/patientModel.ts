export interface IPatientDashboard {
  Code?: string;
  Content?: string;
  Status?: string;
  FullName?: string;
  Gender?: string;
  DOB?: number;
  Age?: number;
  Phone?: string;
  PhysicalCondition: {
    Height?: string;
    Weight?: string;
    BMI?: string;
    Systolic?: string;
    Diastolic?: string;
    Pulse?: number;
    Breath?: number;
    SpO2?: number;
    Temperature?: number;
  };
  Allergies: {
    Id?: number;
    Name?: string;
    Note?: string;
    Piority?: string;
  }[];
  Histories: {
    Id?: number;
    Name?: string;
    DoctorName?: string;
    CreatedOn?: string;
  }[];
  Risks: {
    Group: { Id?: number; Content?: string }[];
    Group1: { Id?: number; Content?: string }[];
    Group2: { Id?: number; Content?: string }[];
  };
  Symptoms?: string;
  DiseaseProgression?: string;
  Diagnosis: {
    Id?: number;
    IcdName?: string;
    IcdCode?: string;
    FreeText?: string;
    Checked: boolean;
    Checked2:boolean;
  }[];
  Prescription: {
    Id?: number;
    DrugName?: string;
    Strength?: string;
    DispenseUnit?: string;
    Directions?: string;
  }[];
}
