package com.backend.greencommute.service;

import com.backend.greencommute.converter.JobConverter;
import com.backend.greencommute.dto.JobDTO;
import com.backend.greencommute.entity.Job;
import com.backend.greencommute.repository.JobRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class JobServiceImpl implements JobService{

    @Autowired
    private JobRepository jobRepository;

    @Autowired
    private JobConverter jobConverter;

    public List<JobDTO> getAllJobs() {
        List<Job> allJobs = jobRepository.findAll();
        return JobConverter.jobsEntityListToDTOList(allJobs);
    }

    @Override
    public JobDTO getJobById(int id) {
        Optional<Job> result = jobRepository.findById(id);
        Job job = null;
        if(result.isPresent()) {
            job = result.get();
        }
        return JobConverter.jobEntityToDto(job);
    }
}
