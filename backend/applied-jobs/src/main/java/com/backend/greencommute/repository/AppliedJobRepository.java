package com.backend.greencommute.repository;

import com.backend.greencommute.entity.AppliedJob;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AppliedJobRepository extends JpaRepository<AppliedJob,Integer> {
}
