function calculateNetSalary(basicSalary, benefits, deductions) {
  const deductionRate = 0.1; 
  const totalDeductions = basicSalary * deductionRate;
  const netSalary = basicSalary + benefits - totalDeductions;
  return netSalary;
}

