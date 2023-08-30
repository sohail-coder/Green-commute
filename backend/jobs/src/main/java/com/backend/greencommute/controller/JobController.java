package com.backend.greencommute.controller;

import com.backend.greencommute.dto.JobDTO;
import com.backend.greencommute.exception.JobNotFoundException;
import com.backend.greencommute.service.JobService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/jobs")
@Slf4j
public class JobController {

    @Autowired
    private JobService jobService;

    @GetMapping("/")
    public List<JobDTO> getAllJobs() {
        log.info("Getting all jobs");
        return jobService.getAllJobs();
    }

    @GetMapping("/{id}")
    public JobDTO getJob(@PathVariable int id) {
        JobDTO job = jobService.getJobById(id);
        if(job == null) {
            throw  new JobNotFoundException("this job does not exist");
        }
        log.info("Getting by jobId");
        return job;
    }

}
