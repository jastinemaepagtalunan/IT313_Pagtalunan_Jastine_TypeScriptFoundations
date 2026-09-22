# IT313_Pagtalunan_Jastine Mae_TypeScript Foundations

## Project Overview
This project refactors a JavaScript registrar utility into a fully typed TypeScript program. It evaluates enrollee eligibility based on calculated averages, tracks passing/probation statuses using Enums, and generates class statistics.

## TypeScript Concepts Implemented
- *Strict Mode:* Enabled "strict": true in tsconfig.json for full type safety.
- **Enums (EnrollmentStatus):** Restricts enrollment status choices to Passing or Probation.
- **Interfaces (Enrollee, EligibilityReport):** Defines strict structural models for student data and reports, including optional properties (remarks?).
- *ES Modules:* Implements named exports (computeAverage) and default exports (getStatus) in gradeUtils.ts.
- **Generics (groupBy<T>):** Flexible array grouping utility supporting any generic type T.
- *Union Types & Type Narrowing:* Accepts string | number values and narrows them using typeof.
- *Async/Await & Promises:* Asynchronous data handling wrapped inside try/catch blocks.

## Execution Instructions
1. Install dependencies:
   ```bash
   npm install -g ts-node typescript