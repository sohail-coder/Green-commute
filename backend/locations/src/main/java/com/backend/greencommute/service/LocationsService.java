package com.backend.greencommute.service;

import com.backend.greencommute.dto.LocationsDTO;

import java.util.List;

public interface LocationsService {

    List<LocationsDTO> findAllLocations();

    public LocationsDTO findLocationById(int id);
}
