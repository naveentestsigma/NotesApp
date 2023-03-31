package com.example.notes.request;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ListRequest {
    Long id;
    Long userId;
    Date datecreated;
    Date datedeadline;
    String todoData;

}
