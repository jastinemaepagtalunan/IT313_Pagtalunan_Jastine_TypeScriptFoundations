import { EnrollmentStatus } from './types';

// Named Export: Computes average of prelim, midterm, and final grades
export function computeAverage(prelim: number, midterm: number, final: number): number {
  return (prelim + midterm + final) / 3;
}

// Default Export: Determines EnrollmentStatus based on calculated average
export default function getStatus(average: number): EnrollmentStatus {
  return average >= 75 ? EnrollmentStatus.Passing : EnrollmentStatus.Probation;
}