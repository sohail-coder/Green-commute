package com.backend.greencommute.service;

import com.backend.greencommute.dto.SavedJobDTO;

import java.util.List;


public interface SavedJobsService {
    List<SavedJobDTO> getAllSavedJobStatus();

    int getSavedJobStatusById(int jobId);

    void updateStatusOfSavedJob(int jobId);
}
