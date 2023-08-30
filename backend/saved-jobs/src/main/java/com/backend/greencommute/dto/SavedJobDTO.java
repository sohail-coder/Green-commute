package com.backend.greencommute.dto;
import com.backend.greencommute.valueobjects.Job;
import lombok.*;


@NoArgsConstructor
@Getter
@Setter
@AllArgsConstructor
public class SavedJobDTO {
    private int id;
    private Job jobId;
    private int saved;
}
