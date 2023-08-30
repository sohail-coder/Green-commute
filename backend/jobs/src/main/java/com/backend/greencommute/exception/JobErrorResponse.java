package com.backend.greencommute.exception;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@AllArgsConstructor
@Getter
@Setter
public class JobErrorResponse {

    private int status;
    private String message;
    private long timeStamp;
}
