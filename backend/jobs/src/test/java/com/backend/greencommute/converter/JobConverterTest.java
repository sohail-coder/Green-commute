package com.backend.greencommute.converter;

import com.backend.greencommute.dto.JobDTO;
import com.backend.greencommute.entity.Job;
import com.backend.greencommute.valueobjects.Company;
import com.backend.greencommute.valueobjects.Locations;
import com.backend.greencommute.valueobjects.Skill;
import com.backend.greencommute.valueobjects.Transport;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.ArrayList;
import java.util.List;

@SpringBootTest
class JobConverterTest {

    @Test
    void jobEntityToDTOTest() {
        Company company1 = new Company(1,"test_company","test_about","test_image");
        Locations location1 = new Locations(1, "hyderabad, --2001",1,"hyderabad");
        Skill skill1 = new Skill(1,"test_skill");
        Transport transport1 = new Transport(1,"Metro");
        List<Transport> transports = new ArrayList<>();
        transports.add(transport1);

        Job job = new Job(1,"test_title","test_description",10,2,"1 day ago", "full_time",location1,skill1,company1,transports);

        JobDTO jobDTO = JobConverter.jobEntityToDto(job);
        Assertions.assertEquals(job.getId(),jobDTO.getId());
    }



    @Test
    void jobEntityListToJobDTOList() {

        Company company1 = new Company(1,"test_company","test_about","test_image");
        Locations location1 = new Locations(1, "hyderabad, --2001",1,"hyderabad");
        Skill skill1 = new Skill(1,"test_skill");
        Transport transport1 = new Transport(1,"Metro");
        List<Transport> transports = new ArrayList<>();
        transports.add(transport1);

        Job job = new Job(1,"test_title","test_description",10,2,"1 day ago", "full_time",location1,skill1,company1,transports);

        List<Job> jobs= new ArrayList<>();
        jobs.add(job);

        List<JobDTO> jobDTOList = JobConverter.jobsEntityListToDTOList(jobs);

        Assertions.assertEquals(jobs.get(0).getTitle(), jobDTOList.get(0).getTitle());
    }
}
