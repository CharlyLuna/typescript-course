abstract class Department {
  static fiscalYear = 2021
  // private id: string
  // private name: string
  protected employees: string[] = []

  constructor(protected readonly id: string, public name: string) {
    // this.id = id
    // this.name = n
  }

  static createEmployee(name: string) {
    return { name, id: Math.random().toString() }
  }

  abstract describe(this: Department): void

  addEmployee(employee: string) {
    this.employees.push(employee)
  }

  printEmployeeInformation() {
    console.log(this.employees.length)
    console.log(this.employees)
  }
}

class ITDepartment extends Department {
  admins: string[]

  constructor(id: string, admins: string[]) {
    super(id, "IT")
    this.admins = admins
  }

  describe() {
    console.log("IT Department - ID: " + this.id)
  }
}

// Singleton pattern
class AccountingDepartment extends Department {
  private lastReport: string
  private static instance: AccountingDepartment

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport
    }

    throw new Error("No report found.")
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please pass in a valid value!")
    }

    this.addReport(value)
  }

  private constructor(id: string, private reports: string[]) {
    super(id, "Accounting")
    this.lastReport = reports[0]
  }

  static getInstance() {
    if (AccountingDepartment.instance) {
      return this.instance
    }
    this.instance = new AccountingDepartment("4", [])
    return this.instance
  }

  describe() {
    console.log("Accounting Department - ID: " + this.id)
  }

  addEmployee(name: string) {
    if (name === "Charly") {
      return
    }
    this.employees.push(name)
  }

  addReport(report: string) {
    this.reports.push(report)
    this.lastReport = report
  }

  printReports() {
    console.log(this.reports)
  }
}

const IT = new ITDepartment("4", ["Charly"])
// Use the singleton pattern
const accounting = AccountingDepartment.getInstance()
const accounting2 = AccountingDepartment.getInstance()
// const accounting = new AccountingDepartment("1", [])
// The same instance of the class is on both variables
console.log(accounting, accounting2)

const employee1 = Department.createEmployee("Carlos")
console.log(employee1, Department.fiscalYear)

// This wont work since this in the describe method should refer to a Department instance
// const objCopy = { describe: IT.describe, name: "DUMMY" }
// objCopy.describe()

accounting.describe()
accounting.mostRecentReport = "End of year report"
accounting.addReport("Some report")
accounting.printReports()
console.log(accounting.mostRecentReport)
accounting.addEmployee("Charly")
accounting.addEmployee("John")
accounting.printEmployeeInformation()

IT.describe()
IT.addEmployee("Charly")
IT.addEmployee("John")

IT.printEmployeeInformation()
console.log(IT.admins)
