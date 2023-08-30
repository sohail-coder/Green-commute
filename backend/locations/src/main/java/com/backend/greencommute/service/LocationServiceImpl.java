package com.backend.greencommute.service;

import com.backend.greencommute.dto.LocationsDTO;
import com.backend.greencommute.entity.Locations;
import com.backend.greencommute.exceptions.LocationNotFoundException;
import com.backend.greencommute.repository.LocationsRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class LocationServiceImpl implements LocationsService{

    @Autowired
    private ModelMapper modelMapper;
    private LocationsRepository locationsRepository;

    @Autowired
    public LocationServiceImpl(LocationsRepository locationsRepository){
        this.locationsRepository = locationsRepository;
    }

    @Override
    public List<LocationsDTO> findAllLocations() {

        List<LocationsDTO> locationDTOS = new ArrayList<>();
        for (Locations location : locationsRepository.findAll()) {
            LocationsDTO locationsDTO = modelMapper.map(location, LocationsDTO.class);
            locationDTOS.add(locationsDTO);
        }
        return locationDTOS;
    }
    @Override
    public LocationsDTO findLocationById(int id) {
        Locations location = locationsRepository.findById(id);
        if(location == null){
            throw  new LocationNotFoundException("Invalid Location Id: " + id);
        }
        return  modelMapper.map(location, LocationsDTO.class);
    }
}
