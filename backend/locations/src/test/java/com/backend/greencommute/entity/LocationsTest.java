package com.backend.greencommute.entity;

import org.junit.Assert;
import org.junit.Test;
import org.junit.jupiter.api.Assertions;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;


@RunWith(SpringRunner.class)
@SpringBootTest
public class LocationsTest {
    @Mock
    Locations locations;

    private int id;
    private String name;
    private int aqi;
    private String address;



    @Test
    public void LocationTest(){
        locations = new Locations();
        locations.setName("Hyderabad");
        Assert.assertEquals("Hyderabad",locations.getName());
    }
    @Test
    public void getId() {
        locations = new Locations();
        locations.setId(1);
        Assert.assertEquals(1,locations.getId());
    }

    @Test
    public void getName() {
        locations = new Locations(1, "Hyderabad", 890, "Hi-tech city");
        Assert.assertEquals("Hyderabad",locations.getName());
    }

    @Test
    public void getAqi() {
        locations = new Locations(1, "Hyderabad", 890, "Hi-tech city");
        Assert.assertEquals(890,locations.getAqi());
    }

    @Test
    public void getAddress() {
        locations = new Locations(1, "Hyderabad", 890, "Hi-tech city");
        Assert.assertEquals("Hi-tech city",locations.getAddress());
    }

    @Test
    public void setId() {
        locations = new Locations(1, "Hyderabad", 890, "Hi-tech city");
        locations.setId(1);
        Assert.assertEquals(1,locations.getId());
    }

    @Test
    public void setName() {
        locations = new Locations(1, "Hyderabad", 890, "Hi-tech city");
        locations.setName("Mumbai");
        Assert.assertEquals("Mumbai",locations.getName());
    }
    @Test
    public void setAqi() {
        locations = new Locations(1, "Hyderabad", 890, "Hi-tech city");
        locations.setAqi(900);
        Assert.assertEquals(900,locations.getAqi());
    }
    @Test
    public void setAddress() {
        locations = new Locations(1, "Hyderabad", 890, "Hi-tech city");
        locations.setAddress("Navi mumbai");
        Assert.assertEquals("Navi mumbai",locations.getAddress());
    }
    @Test
    public void LocationEntityTest() {
        Locations locations = new Locations(1, "Hyderabad", 890, "Hi-tech city");
        Locations locations1 = new Locations();

        locations1.setId(1);
        locations1.setName("Hyderabad");
        locations1.setAqi(890);
        locations1.setAddress("Hi-tech city");

        Assertions.assertEquals(locations.getId(),locations1.getId());
        Assertions.assertEquals(locations.getName(),locations1.getName());
        Assertions.assertEquals(locations.getAqi(),locations1.getAqi());
        Assertions.assertEquals(locations.getAddress(),locations1.getAddress());
    }
}
