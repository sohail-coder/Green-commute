package com.backend.greencommute.controller;

import com.backend.greencommute.dto.JobDTO;
import com.backend.greencommute.exception.JobNotFoundException;
import com.backend.greencommute.repository.JobRepository;
import com.backend.greencommute.service.JobService;
import com.backend.greencommute.service.JobServiceImpl;
import com.backend.greencommute.valueobjects.Company;
import com.backend.greencommute.valueobjects.Locations;
import com.backend.greencommute.valueobjects.Skill;
import com.backend.greencommute.valueobjects.Transport;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;

import java.util.ArrayList;
import java.util.List;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@WebMvcTest(JobController.class)
public class JobControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private JobServiceImpl jobService;

    @MockBean
    private JobRepository jobRepository;

    @Test
    public void getJobTest() throws Exception {

        Company company1 = new Company(1,"test_company","test_about","test_image");
        Locations location1 = new Locations(1, "hyderabad, --2001",1,"hyderabad");
        Skill skill1 = new Skill(1,"test_skill");
        Transport transport1 = new Transport(1,"Metro");
        List<Transport> transports = new ArrayList<>();
        transports.add(transport1);

        JobDTO job = new JobDTO(1,"test_title","test_description",10,2,"1 day ago", "full_time",location1,company1,skill1,transports);

        when(jobService.getJobById(1)).thenReturn(job);
        jobService.getJobById(1);
        this.mockMvc.perform(get("/jobs/1")).andExpect(status().isOk());
    }

    @Test
    public void getAllJobsTest() throws Exception {

        mockMvc.perform(get("/jobs/"))
                .andExpect(status().isOk());
    }

    @Test
    public void exceptionTest() throws Exception {
        try {
            this.mockMvc.perform(get("/jobs/70")).andExpect(MockMvcResultMatchers.status().isNotFound());
        }
        catch (JobNotFoundException jobNotFoundException) {
            throw new JobNotFoundException("no job found");
        }
    }
}
