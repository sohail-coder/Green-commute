package com.backend.greencommute.controller;
import com.backend.greencommute.dto.SavedJobDTO;
import com.backend.greencommute.exceptions.JobNotFoundException;
import com.backend.greencommute.service.SavedJobsServiceImpl;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/savedJobs")
@Slf4j
public class SavedJobController {
    @Autowired
    private SavedJobsServiceImpl savedJobService;

    @GetMapping("/")
    public List<SavedJobDTO> getAllJobsWithSavedStatus() {
        log.info("Getting all saved status");
        return savedJobService.getAllSavedJobStatus();
    }

    @GetMapping("/status/{id}")
    public Integer getSavedStatusById(@PathVariable("id") int id) {
        log.info("Getting all saved status for each id");
        return savedJobService.getSavedJobStatusById(id);
    }

    @PutMapping("/update-status/{id}")
    public Integer updateStatus(@PathVariable("id") int id) {
        savedJobService.updateStatusOfSavedJob(id);
        log.info("changing status from saved to unsaved and vice-versa");
        return id;
    }
}
