package com.backend.greencommute.service;

import com.backend.greencommute.dto.JobDTO;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

@SpringBootTest
class JobServiceTest {

    @Autowired
    private JobService jobService;

    @Test
    void getJobByIdTest() {

        JobDTO job1 = jobService.getJobById(1);
        JobDTO job2 = jobService.getJobById(1);

        Assertions.assertEquals(job1.getId(),job2.getId());
        Assertions.assertEquals(job1.getTitle(),job2.getTitle());
        Assertions.assertEquals(job1.getDescription(),job2.getDescription());
        Assertions.assertEquals(job1.getDistance(),job2.getDistance());
        Assertions.assertEquals(job1.getExperience(),job2.getExperience());
        Assertions.assertEquals(job1.getPostedDate(),job2.getPostedDate());
        Assertions.assertEquals(job1.getJobType(),job2.getJobType());
        Assertions.assertEquals(job1.getLocation().getName(),job2.getLocation().getName());
        Assertions.assertEquals(job1.getCompany().getName(),job2.getCompany().getName());
        Assertions.assertEquals(job1.getSkill().getName(),job2.getSkill().getName());
        Assertions.assertEquals(job1.getTransports().toArray().length, job2.getTransports().toArray().length);
    }

    @Test
    void getAllJobsTest() {
        List<JobDTO> jobList1 = jobService.getAllJobs();
        List<JobDTO> jobList2 = jobService.getAllJobs();
        String jobFromList1 = jobList1.get(0).getTitle();
        String jobFromList2 = jobList2.get(0).getTitle();

        Assertions.assertEquals(jobFromList1,jobFromList2);
    }
}
