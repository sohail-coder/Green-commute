package com.backend.greencommute.service;

import com.backend.greencommute.dto.SavedJobDTO;
import com.backend.greencommute.entity.SavedJob;
import com.backend.greencommute.exceptions.JobNotFoundException;
import com.backend.greencommute.repository.SavedJobsRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
@Service
public class SavedJobsServiceImpl implements SavedJobsService{
    @Autowired
    private ModelMapper modelMapper;
    private SavedJobsRepository savedJobRepository;

    @Autowired
    public SavedJobsServiceImpl(SavedJobsRepository savedJobRepository) {
        this.savedJobRepository = savedJobRepository;
    }
    @Override
    public List<SavedJobDTO> getAllSavedJobStatus() {
        List<SavedJobDTO> savedJobDTOS=new ArrayList<>();
        List<Integer> idsOfSavedJobs=new ArrayList<>();
        for(SavedJob savedJob:savedJobRepository.findAll()){
            SavedJobDTO savedJobDTO = modelMapper.map(savedJob,SavedJobDTO.class);
            savedJobDTOS.add(savedJobDTO);
            if(savedJob.getSaved()==1){
                idsOfSavedJobs.add(savedJob.getId());
            }
        }
        return savedJobDTOS;
    }

    @Override
    public int getSavedJobStatusById(int jobId) {
        Optional<SavedJob> savedJob=(savedJobRepository.findById(jobId));
        if(savedJob.isPresent()){

            return  savedJob.get().getSaved();
        }
        else{
            throw new JobNotFoundException("job not found");
        }
    }

    @Override
    public void updateStatusOfSavedJob(int jobId) {
        Optional<SavedJob> savedJob=(savedJobRepository.findById(jobId));
        if(savedJob.isPresent()){
            SavedJob dummy=new SavedJob();
            dummy.setSaved(savedJob.get().getSaved()==1? 0:1);
            dummy.setJobId(savedJob.get().getJobId());
            dummy.setId(savedJob.get().getId());
            savedJobRepository.save(dummy);
        }
        else{
            throw new JobNotFoundException("job not found");
        }

    }
}
