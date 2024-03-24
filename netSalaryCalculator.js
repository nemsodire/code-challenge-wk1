//  Determining net salary using arithmetic, logical and conditional operators

// create three function names;

// Calculating PAYE
const calculatePayee = (monthlySalary) => {
    if (monthlySalary <= 24000) {
        return monthlySalary * 0.1; // 10% tax rate for income <= 24,000
    }
     else if (monthlySalary > 24000 && monthlySalary <= 32333) {
        return (monthlySalary - 24000) * 0.25 + (24000 * 0.1); // Graduated tax for 24,001 - 32,333
    }
     else if (monthlySalary > 32333 && monthlySalary <= 500000) {
        return (monthlySalary - 32333) * 0.3 + (24000 * 0.1) + (32333 * 0.25); // Graduated tax for 32,334 - 500,000
    }
    else if (monthlySalary > 500000 && monthlySalary <= 800000) {
        return (monthlySalary - 500000) * 0.32 + (24000 * 0.1) + (500000 * 0.3); // Graduated tax for 500,001 - 800,000
    }
    else {
       return monthlySalary * 0.35; // 35% tax rate for income > 800,000
    }
    };
    
      // Determining NHIF Deduction
      const calculateNhifDeduction = (grossPay) => {
        if (grossPay <= 5999) {
          return 150;
        } else if (grossPay >= 6000 && grossPay <= 7999) {
          return 300;
        } else if (grossPay >= 8000 && grossPay <= 11999) {
          return 400;
        } else {
          return Math.min(grossPay * 0.05, 1700); // 5% NHIF capped at 1,700
        }
      };
    
      // Calculating NSSF Deduction
      const calculateNssfDeduction = (grossSalary) => {
        if (grossSalary <= 6000) {
          return grossSalary * 0.06; // 6% NSSF on gross salary <= 6,000
        } else {
          return 360; // Capped NSSF contribution of 360 per month
        }
      };
    
      // Calculating Net Salary (assuming you have calculated values)
      const monthlySalary = 40000;
      const grossPay = monthlySalary + calculatePayee(monthlySalary);
      const nhifDeduction = calculateNhifDeduction(grossPay);
      const nssfDeduction = calculateNssfDeduction(grossSalary);
    
      const netSalary = grossPay - nhifDeduction - nssfDeduction;
    
      return netSalary;
    
    