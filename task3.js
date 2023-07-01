const CSPIT = {
  yearOfEstablishment: 2000,
  location: "Gandhinagar, Gujarat, India",
  departments: ["CE", "IT", "CS", "EC", "EE", "CL", "ME"],
  getAllDetails: function () {
    console.log("Year of Establishment:", this.yearOfEstablishment);
    console.log("Location:", this.location);
    console.log("Departments:");
    for (const department of this.departments) {
      console.log(department);
    }
  },
};

CSPIT.CE = Object.create(CSPIT);
CSPIT.CE.totalStudents = 250;
CSPIT.CE.totalFaculty = 30;

console.log("CSPIT Details:");
for (const key in CSPIT) {
  if (typeof CSPIT[key] !== "function") {
    console.log(key + ":", CSPIT[key]);
  }
}

console.log("\nCE Department Details:");
for (const key in CSPIT.CE) {
  if (typeof CSPIT.CE[key] !== "function") {
    console.log(key + ":", CSPIT.CE[key]);
  }
}
