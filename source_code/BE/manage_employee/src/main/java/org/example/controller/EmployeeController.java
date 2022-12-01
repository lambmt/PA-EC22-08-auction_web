package org.example.controller;

import org.example.entity.Employee;
import org.example.service.EmployeeService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping
public class EmployeeController {

    private final EmployeeService employeeService;

    public EmployeeController(EmployeeService employeeService) {
        this.employeeService = employeeService;
    }

    //add employee form
    @GetMapping("addEmployee")
    public String addEmp() {

        return "add-employee";

    }


    //save employee form
    @PostMapping("/insertEmployee")
    public String insertEmployee(@ModelAttribute("insertEmployee") Employee emp) {

        employeeService.addEmployee(emp);
        return "redirect:/employeeReport";
    }


    //load employee data
    @GetMapping("employeeReport")
    public String lodeEmployee(Model m) {
        m.addAttribute("employee", employeeService.getAllEmp());
        m.addAttribute("title", "Employee Report");

        return "employee-report";
    }


    //edit form
    @GetMapping("/editEmployee/{id}")
    public String lodeEditForm(@PathVariable(value = "id") Long id, Model m) {
        Employee emp = employeeService.getEmpById(id);

        System.out.println(emp);
        m.addAttribute("employee", emp);
        m.addAttribute("title", "Edit Employee");

        return "edit-employee";

    }


    @PostMapping("/editEmployee/updateEmployee")
    public String updateEmp(@ModelAttribute("updateEmployee") Employee emp) {
        employeeService.updateEmp(emp);

        return "redirect:/employeeReport";

    }


    @GetMapping("/deleteEmployee/{id}")
    public String deleteEmployee(@PathVariable Long id) {
        employeeService.deleteEmp(id);


        return "redirect:/employeeReport";
    }

}
