package com.backend.greencommute.controller;
import com.backend.greencommute.dto.LocationsDTO;
import com.backend.greencommute.entity.Locations;
import com.backend.greencommute.exceptions.LocationNotFoundException;
import com.backend.greencommute.repository.LocationsRepository;
import com.backend.greencommute.service.LocationServiceImpl;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@WebMvcTest(LocationsController.class)
class LocationsControllerTests {
    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private LocationServiceImpl locationService;

    @MockBean
    private LocationsRepository locationsRepository;
    @Test
    void shouldReturnListOfLocations() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.get("/locations/"))
                .andExpect(status().isOk());
    }
    @Test
    void LocationWithId() throws Exception {
        Locations locations = new Locations(1, "Hyderabad", 890, "Hitech city Hyderabad - 50001");
        LocationsDTO locationsDTO = new LocationsDTO(1, "Hyderabad", 890, "Hitech city Hyderabad - 50001");

        when(locationService.findLocationById(1)).thenReturn(locationsDTO);
        locationService.findLocationById(1);
        this.mockMvc.perform(get("/locations/1")).andExpect(MockMvcResultMatchers.status().isOk());
    }
    @Test
    void Exception() throws Exception {
        try{
            this.mockMvc.perform(get("/locations/70")).andExpect(MockMvcResultMatchers.status().isNotFound());
        }
        catch(LocationNotFoundException locationNotFoundException){
            throw new LocationNotFoundException("Location id not found - 70");
        }
    }
}
