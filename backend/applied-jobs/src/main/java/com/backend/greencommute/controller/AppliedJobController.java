package com.backend.greencommute.controller;
import com.backend.greencommute.dto.AppliedJobDTO;
import com.backend.greencommute.exceptions.JobNotFoundException;
import com.backend.greencommute.service.AppliedJobService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/appliedJobs")
@Slf4j
public class AppliedJobController {
    @Autowired
    private AppliedJobService appliedJobService;

    @GetMapping("/")
    public List<AppliedJobDTO> getAllJobsWithAppliedStatus() {
        log.info("Getting all applied-jobs");
        return appliedJobService.getAllSavedJobStatus();
    }

    @GetMapping("/status/{id}")
    public Integer getAppliedStatusById(@PathVariable("id") int id) {
        log.info("Getting applied status for each jobId");

        return appliedJobService.getSavedJobStatusById(id);
    }
    @PutMapping("/update-status/{id}")
    public Integer updateStatus(@PathVariable("id") int id) {
        appliedJobService.updateStatusOfSavedJob(id);
        log.info("changing status from applied to un-applied and vice-versa");
        return id;
    }
}
