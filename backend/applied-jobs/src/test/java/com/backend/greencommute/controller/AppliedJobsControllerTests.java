package com.backend.greencommute.controller;

import com.backend.greencommute.entity.AppliedJob;
import com.backend.greencommute.exceptions.JobNotFoundException;
import com.backend.greencommute.repository.AppliedJobRepository;
import com.backend.greencommute.service.AppliedJobServiceImpl;
import com.backend.greencommute.valueobjects.*;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import java.util.ArrayList;
import java.util.List;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.mockito.Mockito.doNothing;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;


@RunWith(SpringRunner.class)
@WebMvcTest(AppliedJobController.class)
class AppliedJobsControllerTests {
    @Autowired
    MockMvc mockMvc;

    @MockBean
    AppliedJobRepository repo;

    @MockBean
    AppliedJobServiceImpl appliedJobService;

    @Test
    void getAllJobsWithAppliedStatus() throws Exception {
        when(appliedJobService.getSavedJobStatusById(1)).thenReturn(1);
        appliedJobService.getSavedJobStatusById(1);
        this.mockMvc.perform(get("/appliedJobs/status/1")).andExpect(MockMvcResultMatchers.status().isOk());
    }

    @Test
    void getAllJobs() throws Exception {

        Company company1 = new Company(1,"test_company","test_about","test_image");
        Locations location1 = new Locations(1, "hyderabad, --2001",1,"hyderabad");
        Skill skill1 = new Skill(1,"test_skill");
        Transport transport1 = new Transport(1,"Metro");
        List<Transport> transports = new ArrayList<>();
        transports.add(transport1);
        Job job = new Job(1,"test_title","test_description",10,2,"1 day ago", "full_time",location1,skill1,company1,transports);
        AppliedJob savedJob=new AppliedJob(1,job,1);

        repo.save(savedJob);
        mockMvc.perform(MockMvcRequestBuilders.get("/appliedJobs/"))
                .andExpect(status().isOk());
    }

    @Test
    void updateStatus() throws  Exception{
        Company company1 = new Company(1,"test_company","test_about","test_image");
        Locations location1 = new Locations(1, "hyderabad, --2001",1,"hyderabad");
        Skill skill1 = new Skill(1,"test_skill");
        Transport transport1 = new Transport(1,"Metro");
        List<Transport> transports = new ArrayList<>();
        transports.add(transport1);
        Job job = new Job(1,"test_title","test_description",10,2,"1 day ago", "full_time",location1,skill1,company1,transports);
        AppliedJob savedJob=new AppliedJob(1,job,1);

        repo.save(savedJob);

        doNothing().when(appliedJobService).updateStatusOfSavedJob(1);
        this.mockMvc.perform(put("/appliedJobs/update-status/1")).andExpect(MockMvcResultMatchers.status().isOk());

    }
    @Test
    void Exception() throws Exception {
        try{
            this.mockMvc.perform(put("/appliedJobs/update-status/100")).andExpect(MockMvcResultMatchers.status().isOk());
        }
        catch(JobNotFoundException job){
            throw new JobNotFoundException("job not found");
        }
    }
}