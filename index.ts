import { Enrollee, EligibilityReport, EnrollmentStatus } from './types';
import getStatus, { computeAverage } from './gradeUtils';

// Starter Enrollee Data Array
const enrollees: Enrollee[] = [
  { name: "Ana Cruz", prelim: 85, midterm: 90, final: 88 },
  { name: "Bea Santos", prelim: 70, midterm: 65, final: 60 },
  { name: "Cid Ramos", prelim: 95, midterm: 92, final: 97 },
  { name: "Dex Alonzo", prelim: 60, midterm: 55, final: 50 },
  { name: "Eli Tan", prelim: 78, midterm: 80, final: 76 }
];

// Simulated Async API Request returning a Promise
function getEnrollees(): Promise<Enrollee[]> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(enrollees), 500);
  });
}

// Union Type Function with Type Narrowing using typeof
function processBatchId(batchId: string | number): void {
  if (typeof batchId === "string") {
    // KORREKSIYON: Gi-dugang ang backticks `` sa string template
    console.log(`Processing Batch Code: ${batchId.toUpperCase()}`);
  } else {
    // KORREKSIYON: Gi-dugang ang backticks `` sa string template
    console.log(`Processing Batch ID: #${batchId.toFixed(0)}`);
  }
}

// Generic Utility Function for grouping items by key
function groupBy<T>(items: T[], keyFn: (item: T) => string): Record<string, T[]> {
  return items.reduce((acc, item) => {
    const key = keyFn(item);
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(item);
    return acc;
  }, {} as Record<string, T[]>);
}

// Main Async Report Execution Block
async function runReport() {
  try {
    processBatchId("batch-2026-a");

    const data = await getEnrollees();

    // Map raw enrollee data to typed EligibilityReport objects
    const reports: EligibilityReport[] = data.map((e) => {
      const avg = computeAverage(e.prelim, e.midterm, e.final);
      const status = getStatus(avg);
      
      const report: EligibilityReport = {
        name: e.name,
        average: avg,
        status: status
      };

      if (status === EnrollmentStatus.Probation) {
        report.remarks = "Needs consultation";
      }

      return report;
    });

    // Grouping report entries using Generic function
    const grouped = groupBy(reports, (r) => r.status);

    // Calculate Class Average using reduce
    const totalClassAvg = reports.reduce((sum, r) => sum + r.average, 0) / reports.length;
    const passingCount = (grouped[EnrollmentStatus.Passing] || []).length;

    // Output Formatted Report
    console.log("=== IT313 Enrollment Eligibility Report (TypeScript) ===");
    
    reports.forEach((r) => {
      // KORREKSIYON: Gi-dugang ang backticks `` diri sa tanang console.log sa ubos
      console.log(`${r.name}`);
      console.log(`Average: ${r.average.toFixed(2)}    ${r.status}`);
      if (r.remarks) {
        console.log(`${r.remarks}`);
      }
    });

    console.log(`\nClass Average: ${totalClassAvg.toFixed(2)}`);
    console.log(`Passing: ${passingCount}/${reports.length}`);

  } catch (error) {
    console.error("Failed to load records:", error);
  }
}

runReport();