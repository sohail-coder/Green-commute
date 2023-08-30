package com.backend.greencommute.exceptions;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class AppliedJobErrorResponse {
    private int status;
    private String message;
    private long timeStamp;
    private int value;
}