// Enum for Enrollment Status
export enum EnrollmentStatus {
  Passing = "PASSING",
  Probation = "PROBATION"
}

// Interface for Enrollee Input Data
export interface Enrollee {
  name: string;
  prelim: number;
  midterm: number;
  final: number;
}

// Interface for Eligibility Report Output Data
export interface EligibilityReport {
  name: string;
  average: number;
  status: EnrollmentStatus;
  remarks?: string; // Optional property for PROBATION
}