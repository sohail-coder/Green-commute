package com.backend.greencommute.service;

import com.backend.greencommute.dto.AppliedJobDTO;

import java.util.List;

public interface AppliedJobService {
    List<AppliedJobDTO> getAllSavedJobStatus();

    int getSavedJobStatusById(int jobId);

    void updateStatusOfSavedJob(int jobId);
}
