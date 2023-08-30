package com.backend.greencommute.service;
import com.backend.greencommute.entity.SavedJob;
import com.backend.greencommute.exceptions.JobNotFoundException;
import com.backend.greencommute.repository.SavedJobsRepository;
import com.backend.greencommute.valueobjects.*;
import org.junit.jupiter.api.Test;
import org.modelmapper.ModelMapper;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import java.util.stream.Collectors;
import java.util.stream.Stream;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

@SpringBootTest
class ServiceTests {
    @MockBean
    SavedJobsRepository savedJobRepository;
    private ModelMapper modelMapper;
    @Autowired
    SavedJobsServiceImpl savedJobService;

    @Test
    void getAllJobs() {
        Locations location = new Locations(1, "hyd", 894,"hyd");
        Company company1 = new Company(1,"test_company","test_about","test_image");
        Locations location1 = new Locations(1, "hyderabad, --2001",1,"hyderabad");
        Skill skill1 = new Skill(1,"test_skill");
        Transport transport1 = new Transport(1,"Metro");
        List<Transport> transports = new ArrayList<>();
        transports.add(transport1);
        Job job = new Job(1,"test_title","test_description",10,2,"1 day ago", "full_time",location1,skill1,company1,transports);

        SavedJob savedJob=new SavedJob(1,job,1);
        when(savedJobRepository.findAll())
                .thenReturn(Stream.of(savedJob)
                        .collect(Collectors.toList()));
        assertEquals(1, savedJobService.getAllSavedJobStatus().size());
    }
    @Test
    void getSavedJobStatusById() throws JobNotFoundException {
        List<Optional<SavedJob>> savedJobs= new ArrayList<>();

        Locations location = new Locations(1, "hyd", 894,"hyd");
        Company company1 = new Company(1,"test_company","test_about","test_image");
        Locations location1 = new Locations(1, "hyderabad, --2001",1,"hyderabad");
        Skill skill1 = new Skill(1,"test_skill");
        Transport transport1 = new Transport(1,"Metro");
        List<Transport> transports = new ArrayList<>();
        transports.add(transport1);
        Job job = new Job(1,"test_title","test_description",10,2,"1 day ago", "full_time",location1,skill1,company1,transports);

        Optional<SavedJob> savedJob= Optional.of(new SavedJob(1, job, 0));

        savedJobs.add(savedJob);

        when(savedJobRepository.findById(savedJob.get().getId())).thenReturn((savedJob));

        if(savedJobService.getSavedJobStatusById(1)!=savedJob.get().getSaved()){
            throw new JobNotFoundException("job not found");
        }
        System.out.println(savedJobRepository.findById(savedJob.get().getId()));

        assertEquals(savedJob.get().getSaved(), savedJobService.getSavedJobStatusById(1));
    }
    @Test
    void update() throws JobNotFoundException {
        List<SavedJob> savedJobs = new ArrayList<>();
        Locations location = new Locations(1, "hyd", 894,"hyd");
        Company company1 = new Company(1,"test_company","test_about","test_image");
        Locations location1 = new Locations(1, "hyderabad, --2001",1,"hyderabad");
        Skill skill1 = new Skill(1,"test_skill");
        Transport transport1 = new Transport(1,"Metro");
        List<Transport> transports = new ArrayList<>();
        transports.add(transport1);
        Job job = new Job(1,"test_title","test_description",10,2,"1 day ago", "full_time",location1,skill1,company1,transports);

        SavedJob savedJob = new SavedJob(1, job, 0);

        savedJobRepository.save(savedJob);
        savedJobs.add(savedJob);

        when(savedJobRepository.findById(1)).thenReturn(Optional.of(savedJob));
        try {
            savedJobService.updateStatusOfSavedJob(1);
            assertEquals(0, savedJobService.getSavedJobStatusById(1));
        } catch (JobNotFoundException e) {
            throw new JobNotFoundException("job not found");

        }
    }
}
