package com.backend.greencommute.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class LocationNotFoundExceptionHandler {
    @ExceptionHandler
    public ResponseEntity<LocationErrorResponse> handleException(LocationNotFoundException exc) {

        LocationErrorResponse error = new LocationErrorResponse(
                HttpStatus.NOT_FOUND.value(), exc.getMessage(), System.currentTimeMillis()
        );

        return new ResponseEntity<>(error,HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler
    public ResponseEntity<LocationErrorResponse> handleException(Exception exc) {

        LocationErrorResponse error = new LocationErrorResponse(
                HttpStatus.BAD_REQUEST.value(), exc.getMessage(), System.currentTimeMillis()
        );
        return new ResponseEntity<>(error,HttpStatus.BAD_REQUEST);
    }
}