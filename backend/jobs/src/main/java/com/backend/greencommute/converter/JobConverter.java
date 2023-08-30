package com.backend.greencommute.converter;

import com.backend.greencommute.dto.JobDTO;
import com.backend.greencommute.entity.Job;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class JobConverter {

    private JobConverter() {

    }
    public static JobDTO jobEntityToDto(Job job) {
        if(job == null) {
            return null;
        }

        JobDTO jobDTO = new JobDTO();
        jobDTO.setId(job.getId());
        jobDTO.setDistance(job.getDistance());
        jobDTO.setExperience(job.getExperience());
        jobDTO.setDescription(job.getDescription());
        jobDTO.setJobType(job.getJobType());
        jobDTO.setCompany(job.getCompany());
        jobDTO.setTitle(job.getTitle());
        jobDTO.setTransports(job.getTransports());
        jobDTO.setLocation(job.getLocation());
        jobDTO.setSkill(job.getSkill());
        jobDTO.setPostedDate(job.getPostedDate());
        return jobDTO;
    }

    public static List<JobDTO> jobsEntityListToDTOList(List<Job> jobs) {
        return jobs.stream().map(JobConverter::jobEntityToDto).collect(Collectors.toList());
    }
}
