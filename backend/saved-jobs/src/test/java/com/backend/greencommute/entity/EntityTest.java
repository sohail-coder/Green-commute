package com.backend.greencommute.entity;
import com.backend.greencommute.repository.SavedJobsRepository;
import com.backend.greencommute.valueobjects.*;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.ArrayList;
import java.util.List;

@SpringBootTest
class EntityTest {
    @Autowired
    private SavedJobsRepository savedJobRepository;

    @Test
    void savedJobEntityMethods () {
        Locations location = new Locations(1, "hyd", 894,"hyd");
        Locations location2 = new Locations();
        location2.setId(1);
        location2.setName("hyd");
        location2.setAqi(894);
        location2.setAddress("hyd");
        Assertions.assertEquals(location.getId(),location2.getId());
        Assertions.assertEquals(location.getAqi(),location2.getAqi());
        Assertions.assertEquals(location.getName(),location2.getName());
        Assertions.assertEquals(location.getAddress(),location2.getAddress());

        Company company1 = new Company(1,"test_company","test_about","test_image");
        Locations location1 = new Locations(1, "hyderabad, --2001",1,"hyderabad");
        Skill skill1 = new Skill(1,"test_skill");
        Transport transport1 = new Transport(1,"Metro");
        List<Transport> transports = new ArrayList<>();
        transports.add(transport1);
        Job job1 = new Job(1,"test_title","test_description",10,2,"1 day ago", "full_time",location1,skill1,company1,transports);

        Job job2 = new Job();
        job2.setId(1);
        job2.setTitle("test_title");
        job2.setDescription("test_description");
        job2.setDistance(10);
        job2.setExperience(2);
        job2.setPostedDate("1 day ago");
        job2.setJobType("full_time");
        job2.setLocation(location1);
        job2.setCompany(company1);
        job2.setSkill(skill1);
        job2.setTransports(transports);

        Assertions.assertEquals(job1.getId(),job2.getId());
        Assertions.assertEquals(job1.getTitle(),job2.getTitle());
        Assertions.assertEquals(job1.getDescription(),job2.getDescription());
        Assertions.assertEquals(job1.getDistance(),job2.getDistance());
        Assertions.assertEquals(job1.getExperience(),job2.getExperience());
        Assertions.assertEquals(job1.getPostedDate(),job2.getPostedDate());
        Assertions.assertEquals(job1.getJobType(),job2.getJobType());
        Assertions.assertEquals(job1.getLocation(),job2.getLocation());
        Assertions.assertEquals(job1.getCompany(),job2.getCompany());
        Assertions.assertEquals(job1.getSkill(),job2.getSkill());
        Assertions.assertEquals(job1.getTransports(),job2.getTransports());
    }

}
