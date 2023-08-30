package com.backend.greencommute.repository;

import com.backend.greencommute.entity.Locations;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LocationsRepository extends JpaRepository<Locations, Integer> {

    public Locations findById(int id);
}
