package com.backend.greencommute.service;

import com.backend.greencommute.dto.LocationsDTO;
import com.backend.greencommute.entity.Locations;
import com.backend.greencommute.repository.LocationsRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.assertj.core.api.AssertionsForClassTypes.assertThat;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import static org.mockito.Mockito.when;

@SpringBootTest
class LocationsServiceTest {
    @Autowired
    private LocationServiceImpl locationService;
    @MockBean
    private LocationsRepository locationsRepository;
    @Test
    void findAllTest() {
        when(locationsRepository.findAll())
                .thenReturn(Stream.of(new Locations(1,"Hyderabad", 890, "Hi-tech city"))
                        .collect(Collectors.toList()));
        assertEquals(1, locationService.findAllLocations().size());

    }
    @Test
    void findByIdTest(){
        Locations locations = new Locations(1, "Hyderabad", 890, "Hi-tech city");
        LocationsDTO locationsDTO = new LocationsDTO(1, "Hyderabad", 890, "Hi-tech city");
        when(locationsRepository.findById(1)).thenReturn(locations);
        assertThat(locationService.findLocationById(1).getName()).isEqualTo(locationsDTO.getName());
    }
}
