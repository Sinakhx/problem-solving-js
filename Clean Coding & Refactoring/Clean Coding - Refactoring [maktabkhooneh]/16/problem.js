// Bad
class Employee {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
}

class EmployeeTaxData extends Employee {
  constructor(ssn, salary) {
    super();
    this.ssn = ssn;
    this.salary = salary;
  }
}
