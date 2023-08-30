package com.backend.greencommute.exceptions;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
@ControllerAdvice
public class JobNotFoundExceptionHandler {
    @ExceptionHandler
    public ResponseEntity<AppliedJobErrorResponse> handleException(JobNotFoundException exc) {
        AppliedJobErrorResponse error = new AppliedJobErrorResponse();
        error.setStatus(HttpStatus.NOT_FOUND.value());
        error.setMessage(exc.getMessage());
        error.setTimeStamp(System.currentTimeMillis());

        return new ResponseEntity<>(error, HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler
    public ResponseEntity<AppliedJobErrorResponse> handleException(Exception exception) {
        AppliedJobErrorResponse errorResponse = new AppliedJobErrorResponse();
        errorResponse.setStatus(HttpStatus.BAD_REQUEST.value());
        errorResponse.setMessage("id is incorrect");
        errorResponse.setTimeStamp(System.currentTimeMillis());
        return new ResponseEntity<>(errorResponse, HttpStatus.BAD_REQUEST);
    }
}