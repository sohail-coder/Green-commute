package com.backend.greencommute.exceptions;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
@AllArgsConstructor
@Getter
@Setter
public class LocationErrorResponse {

        private int status;
        private String message;
        private long timeStamp;

}