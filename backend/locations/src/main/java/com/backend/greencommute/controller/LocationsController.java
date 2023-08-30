package com.backend.greencommute.controller;

import com.backend.greencommute.dto.LocationsDTO;
import com.backend.greencommute.exceptions.LocationNotFoundException;
import com.backend.greencommute.service.LocationServiceImpl;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/")
@Slf4j
public class LocationsController {

    @Autowired
    private LocationServiceImpl locationService;

    @GetMapping("/locations")
    public List<LocationsDTO> getLocations(){
        log.info("Getting all locations");
        return locationService.findAllLocations();
    }

    @GetMapping("/locations/{id}")
    public LocationsDTO getLocationById(@PathVariable int id){
        LocationsDTO location = locationService.findLocationById(id);

        if(location==null){
            log.info("Location id not found - "+id);
            throw new LocationNotFoundException("Location id not found - "+id);
        }
        log.info("Getting locations by id");
        return location;
    }
}
