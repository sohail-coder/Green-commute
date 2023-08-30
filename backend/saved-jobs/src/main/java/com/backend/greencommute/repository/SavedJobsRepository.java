package com.backend.greencommute.repository;

import com.backend.greencommute.entity.SavedJob;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SavedJobsRepository extends JpaRepository<SavedJob,Integer> {
}
