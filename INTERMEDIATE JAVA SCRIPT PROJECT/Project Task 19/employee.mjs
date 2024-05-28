let payGrades = {
  entryLevel: { taxMultiplier: .05, benefits: ['health'], minSalary: 10000, maxSalary: 49999 },
  midLevel: { taxMultiplier: .1, benefits: ['health', 'housing'], minSalary: 50000, maxSalary: 99999 },
  seniorLevel: { taxMultiplier: .2, benefits: ['health', 'housing', 'wellness', 'gym'], minSalary: 100000, maxSalary: 200000 }
};

let Employee = {
    salary : 10000,
    getCadre : function(){
        if (Employee.salary >= payGrades.entryLevel.minSalary && Employee.salary <= payGrades.entryLevel.maxSalary) {
          return 'entryLevel';
        } else if (Employee.salary >= payGrades.midLevel.minSalary && Employee.salary <= payGrades.midLevel.maxSalary) {
          return 'midLevel';
        } else return 'seniorLevel';
      },
    calculateTax : function(){
        return payGrades[Employee.getCadre()].taxMultiplier * Employee.salary;
      },
    
      getBenefits : function(){
        return payGrades[Employee.getCadre()].benefits.join(', ');
      },

      calculateBonus : function(){
        return .02 * Employee.salary;
      },
      reimbursementEligibility : function(){
        let reimbursementCosts = { health: 5000, housing: 8000, wellness: 6000, gym: 12000 };
        let totalBenefitsValue = 0; 
        let employeeBenefits = payGrades[Employee.getCadre()].benefits;
        for (let i = 0; i < employeeBenefits.length; i++) {
          totalBenefitsValue += reimbursementCosts[employeeBenefits[i]];
        }
        return totalBenefitsValue;
      }

    }

export default Employee


