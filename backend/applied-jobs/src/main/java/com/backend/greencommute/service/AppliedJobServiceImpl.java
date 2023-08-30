package com.backend.greencommute.service;

import com.backend.greencommute.dto.AppliedJobDTO;
import com.backend.greencommute.entity.AppliedJob;
import com.backend.greencommute.exceptions.JobNotFoundException;
import com.backend.greencommute.repository.AppliedJobRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.modelmapper.ModelMapper;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
@Service
public class AppliedJobServiceImpl implements AppliedJobService{
    @Autowired
    private ModelMapper modelMapper;
    private AppliedJobRepository appliedJobRepo;
    @Autowired
    public AppliedJobServiceImpl(AppliedJobRepository appliedJobRepo) {
        this.appliedJobRepo = appliedJobRepo;
    }
    @Override
    public List<AppliedJobDTO> getAllSavedJobStatus() {
        List<AppliedJobDTO> appliedJobDTOs=new ArrayList<>();
        List<Integer> idsOfAppliedJobs=new ArrayList<>();
        for(AppliedJob appliedJob:appliedJobRepo.findAll()){
            AppliedJobDTO savedJobDTO = modelMapper.map(appliedJob,AppliedJobDTO.class);
            appliedJobDTOs.add(savedJobDTO);
            if(appliedJob.getApplied()==1){
                idsOfAppliedJobs.add(appliedJob.getId());
            }
        }
        return appliedJobDTOs;
    }

    @Override
    public int getSavedJobStatusById(int jobId) {
        Optional<AppliedJob> savedJob=(appliedJobRepo.findById(jobId));
        if(savedJob.isPresent()){

            return  savedJob.get().getApplied();
        }
        else{
            throw new JobNotFoundException("job not found");
        }
    }

    @Override
    public void updateStatusOfSavedJob(int jobId) {
        Optional<AppliedJob> savedJob=(appliedJobRepo.findById(jobId));
        if(savedJob.isPresent()){
            AppliedJob dummy=new AppliedJob();
            dummy.setApplied(savedJob.get().getApplied()==1? 0:1);
            dummy.setJobId(savedJob.get().getJobId());
            dummy.setId(savedJob.get().getId());
            appliedJobRepo.save(dummy);
        }
        else{
            throw new JobNotFoundException("job not found");
        }

    }
}