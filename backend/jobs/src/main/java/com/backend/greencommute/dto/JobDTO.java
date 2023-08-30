package com.backend.greencommute.dto;

import com.backend.greencommute.valueobjects.Company;
import com.backend.greencommute.valueobjects.Locations;
import com.backend.greencommute.valueobjects.Skill;
import com.backend.greencommute.valueobjects.Transport;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class JobDTO {

    private int id;
    private String title;
    private String description;
    private int distance;
    private int experience;
    private String postedDate;
    private String jobType;
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    private Locations location;
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    private Company company;
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    private Skill skill;
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    private List<Transport> transports;
}
