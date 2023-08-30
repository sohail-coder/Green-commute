package com.backend.greencommute.entity;
import com.backend.greencommute.valueobjects.Job;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Table(name = "applied_jobs")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
public class AppliedJob {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @OneToOne(cascade = {CascadeType.DETACH,CascadeType.MERGE,CascadeType.PERSIST,CascadeType.REFRESH})
    @JoinColumn(name = "job_id")
    private Job jobId;

    @Column(name = "applied")
    private int applied;
}