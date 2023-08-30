package com.backend.greencommute.service;

import com.backend.greencommute.dto.JobDTO;

import java.util.List;

public interface JobService {

    public List<JobDTO> getAllJobs();

    public JobDTO getJobById(int id);
}
