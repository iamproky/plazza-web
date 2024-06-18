package com.api.server.model;

import jakarta.persistence.*;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;
import org.springframework.data.annotation.CreatedDate;

import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@Entity
@Table(name = "produtos")
public class produtos {

  @Id
  @GeneratedValue(strategy = GenerationType.SEQUENCE)
  @Column(name = "id", nullable = false)
  private Long id;

  private String nome;
  private String marca;
  private String modelo;
  private float preco;
  private int tamanho;
  private String cor;
  private int estoque;
  private String descricao;
  private int quantidade;

  @CreatedDate
  @CreationTimestamp
  private LocalDateTime data_adicionado;

}

