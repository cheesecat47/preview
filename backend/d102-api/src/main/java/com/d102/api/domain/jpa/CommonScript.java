package com.d102.api.domain.jpa;

import com.d102.common.domain.jpa.BaseTime;
import com.d102.common.domain.jpa.User;
import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@ToString
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class CommonScript extends BaseTime {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "question_id", nullable = false)
    private CommonQuestion commonQuestion;

    @Column(name = "script", length = 512, nullable = false)
    private String script;

}
