package org.example.service;

import org.example.dao.EmployeeDao;
import org.example.entity.Employee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.List;

@Component
@Service
public class EmployeeService {
    @Autowired
    EmployeeDao employeeDao;

    //add employee
    public void addEmployee(Employee emp) {
        employeeDao.addEmployee(emp);
    }

    //get all employee
    public List<Employee> getAllEmp() {
        return employeeDao.getAllEmp();
    }

    //get employee by id
    public Employee getEmpById(Long id) {
        return employeeDao.getEmpById(id);
    }

    //update employee
    public void updateEmp(Employee emp) {
        employeeDao.updateEmp(emp);
    }

    //delete employee
    public void deleteEmp(Long id) {
        employeeDao.deleteEmp(id);
    }

}
