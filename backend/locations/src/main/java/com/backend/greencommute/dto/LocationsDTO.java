package com.backend.greencommute.dto;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class LocationsDTO {
    private int id;
    private String name;
    private int aqi;
    private String address;
}
